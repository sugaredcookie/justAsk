import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../theme/app_colors.dart';

/// Small informational row shown under the login action, reminding the
/// user that only official VIT-AP student accounts are accepted.
///
/// Purely informational — no validation happens on this screen.
class NoticeChip extends StatelessWidget {
  const NoticeChip({
    super.key,
    this.message = 'Only official college email accounts are allowed',
  });

  final String message;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(Icons.verified_user_outlined, size: 16, color: AppColors.light1),
        const SizedBox(width: 6),
        Flexible(
          child: Text(
            message,
            textAlign: TextAlign.center,
            style: GoogleFonts.inter(
              fontSize: 12.5,
              color: AppColors.textMuted,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
      ],
    );
  }
}
