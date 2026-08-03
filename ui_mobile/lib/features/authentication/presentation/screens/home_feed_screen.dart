import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../authentication/presentation/theme/app_colors.dart';

/// Temporary placeholder for the JustAsk home feed.
///
/// Replace this with the real feed UI once it's ready. For now it just
/// confirms that navigation after a successful VIT-AP Google sign-in
/// works end-to-end.
class HomeFeedScreen extends StatelessWidget {
  const HomeFeedScreen({super.key, required this.email});

  /// The signed-in user's email, passed in from the login screen so you
  /// can display it here for now (useful while there's no backend yet).
  final String email;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.dark1,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.check_circle, color: AppColors.primary, size: 56),
                const SizedBox(height: 16),
                Text(
                  'Welcome to JustAsk',
                  style: GoogleFonts.manrope(
                    fontSize: 24,
                    fontWeight: FontWeight.w800,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Signed in as $email',
                  style: GoogleFonts.inter(
                    fontSize: 14,
                    color: AppColors.light2,
                  ),
                ),
                const SizedBox(height: 24),
                Text(
                  'Home feed placeholder — build the real feed UI here.',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.inter(
                    fontSize: 13,
                    color: AppColors.light1,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}