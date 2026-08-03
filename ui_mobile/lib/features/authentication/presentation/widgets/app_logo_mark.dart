import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../theme/app_colors.dart';

/// The circular neumorphic mark used above the "JustAsk" wordmark, plus
/// the wordmark and tagline themselves.
class AppLogoMark extends StatelessWidget {
  const AppLogoMark({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 72,
          height: 72,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: AppColors.surface,
            boxShadow: [
              BoxShadow(
                color: Colors.white.withOpacity(0.9),
                offset: const Offset(-6, -6),
                blurRadius: 12,
              ),
              BoxShadow(
                color: AppColors.light1.withOpacity(0.25),
                offset: const Offset(6, 6),
                blurRadius: 14,
              ),
            ],
          ),
          child: Icon(Icons.hub_rounded, color: AppColors.primary, size: 34),
        ),
        const SizedBox(height: 16),
        RichText(
          text: TextSpan(
            style: GoogleFonts.manrope(
              fontSize: 26,
              fontWeight: FontWeight.w800,
            ),
            children: [
              TextSpan(
                text: 'Just',
                style: TextStyle(color: AppColors.dark1),
              ),
              TextSpan(
                text: 'Ask',
                style: TextStyle(color: AppColors.primary),
              ),
            ],
          ),
        ),
        const SizedBox(height: 4),
        Text(
          'Connect. Collaborate. Campus.',
          style: GoogleFonts.inter(
            fontSize: 13,
            color: AppColors.textMuted,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }
}
