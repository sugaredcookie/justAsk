import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:google_sign_in/google_sign_in.dart';

import 'home_feed_screen.dart';
import '../theme/app_colors.dart';
import '../widgets/app_logo_mark.dart';
import '../widgets/google_sign_in_button.dart';
import '../widgets/login_background.dart';
import '../widgets/notice_chip.dart';

/// Frontend-only login screen for JustAsk.
///
/// There is exactly ONE way to sign in: "Continue with Google". No email,
/// password, or OTP fields exist by design — see [onGoogleLoginPressed].
/// No authentication is implemented here; this is UI only.
class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;
  late final Animation<double> _fade;
  late final Animation<Offset> _slide;

  bool _isSigningIn = false;

  // NOTE: Replace 'YOUR_WEB_CLIENT_ID' with the Web OAuth client ID you
  // created in Google Cloud Console (Credentials > Web application).
  // This is required so the returned idToken can be verified by your
  // backend later — it is NOT the Android client ID.
  //
  // google_sign_in v7+ uses a singleton instance instead of a
  // constructor, and requires an explicit async initialize() call
  // before it can be used.
  final GoogleSignIn _googleSignIn = GoogleSignIn.instance;
  late final Future<void> _googleSignInReady;

  @override
  void initState() {
    super.initState();
    _googleSignInReady = _googleSignIn.initialize(
      serverClientId: '150439942636-7lqlpbrf4tke7d78rp675ngtub7p8t19.apps.googleusercontent.com',
    );
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 700),
    );
    _fade = CurvedAnimation(parent: _controller, curve: Curves.easeOut);
    _slide = Tween<Offset>(
      begin: const Offset(0, 0.06),
      end: Offset.zero,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeOutCubic));
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  /// Launches the real Google account picker, retrieves the signed-in
  /// user's idToken, and (for now) checks the email domain locally.
  ///
  /// IMPORTANT: This client-side @vitapstudent.ac.in check is only a
  /// convenience for the UI. The real, trustworthy check MUST happen on
  /// your backend by verifying the idToken and reading the email from
  /// the verified payload — never trust the client alone in production.
  Future<void> onGoogleLoginPressed() async {
    setState(() => _isSigningIn = true);
    try {
      // Must complete once before authenticate() can be called.
      await _googleSignInReady;
      debugPrint('[JustAsk] GoogleSignIn initialized OK.');

      // Clear any previous session so the picker always shows, rather
      // than silently re-using a cached account.
      try {
        await _googleSignIn.signOut();
      } catch (_) {
        // No previous session to sign out of — safe to ignore.
      }

      final GoogleSignInAccount account = await _googleSignIn.authenticate();
      debugPrint('[JustAsk] Authenticated as: ${account.email}');

      // In v7+, .authentication is a synchronous getter, not a Future.
      final GoogleSignInAuthentication auth = account.authentication;
      final String? idToken = auth.idToken;
      debugPrint('[JustAsk] idToken present: ${idToken != null}');

      if (idToken == null) {
        _showMessage('Sign-in failed: no ID token returned.');
        return;
      }

      // TODO: Replace this with a real call to your backend, e.g.:
      // final response = await http.post(
      //   Uri.parse('https://your-api.com/auth/google'),
      //   body: {'idToken': idToken},
      // );
      // Then navigate based on the backend's verdict instead of this
      // client-side check.
      if (!account.email.endsWith('@vitapstudent.ac.in')) {
        await _googleSignIn.signOut();
        _showMessage(
          'Access restricted to official @vitapstudent.ac.in accounts.',
        );
        return;
      }

      if (!mounted) return;
      debugPrint('[JustAsk] Domain check passed — navigating to home feed.');
      // TODO: Once you have a backend, verify the idToken there first and
      // navigate based on its response instead of this client-side check.
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(
          builder: (_) => HomeFeedScreen(email: account.email),
        ),
      );
    } on GoogleSignInException catch (e) {
      // Thrown for cancellation, config errors, etc. (v7+ no longer
      // returns null on cancel — it throws instead).
      debugPrint('[JustAsk] GoogleSignInException: ${e.code} — ${e.description}');
      if (e.code == GoogleSignInExceptionCode.canceled) {
        // User dismissed the picker — not a real error.
      } else {
        _showMessage('Sign-in error: ${e.code} — ${e.description}');
      }
    } catch (e) {
      debugPrint('[JustAsk] Unexpected sign-in error: $e');
      _showMessage('Sign-in error: $e');
    } finally {
      if (mounted) setState(() => _isSigningIn = false);
    }
  }

  void _showMessage(String message) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LoginBackground(
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding:
              const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 420),
                child: FadeTransition(
                  opacity: _fade,
                  child: SlideTransition(
                    position: _slide,
                    child: _LoginCard(
                      isSigningIn: _isSigningIn,
                      onGooglePressed: onGoogleLoginPressed,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _LoginCard extends StatelessWidget {
  const _LoginCard({
    required this.isSigningIn,
    required this.onGooglePressed,
  });

  final bool isSigningIn;
  final VoidCallback onGooglePressed;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 40),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.72),
        borderRadius: BorderRadius.circular(28),
        border: Border.all(color: Colors.white.withOpacity(0.6)),
        boxShadow: [
          BoxShadow(
            color: AppColors.dark2.withOpacity(0.08),
            blurRadius: 32,
            offset: const Offset(0, 18),
          ),
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          RichText(
            text: TextSpan(
              style: GoogleFonts.manrope(
                fontSize: 28,
                fontWeight: FontWeight.w800,
              ),
              children: [
                TextSpan(
                  text: 'Welcome ',
                  style: TextStyle(color: AppColors.dark1),
                ),
                TextSpan(
                  text: 'Back',
                  style: TextStyle(color: AppColors.primary),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Log in to continue your journey',
            style: GoogleFonts.inter(fontSize: 14, color: AppColors.textMuted),
          ),
          const SizedBox(height: 24),
          const _LeafDivider(),
          const SizedBox(height: 24),
          const AppLogoMark(),
          const SizedBox(height: 32),
          // Replaces the old email text field + separate Login button:
          // this single control is the entire sign-in flow.
          GoogleSignInButton(
            onPressed: onGooglePressed,
            isLoading: isSigningIn,
          ),
          const SizedBox(height: 20),
          const NoticeChip(),
        ],
      ),
    );
  }
}

class _LeafDivider extends StatelessWidget {
  const _LeafDivider();

  @override
  Widget build(BuildContext context) {
    Widget line() => Expanded(child: Container(height: 1, color: AppColors.light2));
    return Row(
      children: [
        line(),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10),
          child: Icon(Icons.eco_outlined, size: 16, color: AppColors.light1),
        ),
        line(),
      ],
    );
  }
}