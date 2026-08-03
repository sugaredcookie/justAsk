import 'dart:ui';
import 'package:flutter/material.dart';

import '../theme/app_colors.dart';

/// Soft, minimal background: a pale gradient with a couple of low-opacity
/// blurred "blobs" for depth. Intentionally very subtle — no distractions.
class LoginBackground extends StatelessWidget {
  const LoginBackground({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFFF3FAF5), Color(0xFFE7F3EA)],
            ),
          ),
        ),
        Positioned(
          top: -60,
          left: -40,
          child: _blob(220, AppColors.light1.withOpacity(0.25)),
        ),
        Positioned(
          bottom: -80,
          right: -50,
          child: _blob(260, AppColors.primary.withOpacity(0.14)),
        ),
        child,
      ],
    );
  }

  Widget _blob(double size, Color color) {
    return ImageFiltered(
      imageFilter: ImageFilter.blur(sigmaX: 60, sigmaY: 60),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(shape: BoxShape.circle, color: color),
      ),
    );
  }
}
