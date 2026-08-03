import 'package:flutter/material.dart';

/// Centralized color palette for the JustAsk authentication flow.
/// Keep this in sync with the app-wide design system.
class AppColors {
  AppColors._();

  // Primary brand color
  static const Color primary = Color(0xFF22C55E);

  // Dark greens (used sparingly for text / accents on the light theme)
  static const Color dark1 = Color(0xFF051F20);
  static const Color dark2 = Color(0xFF0B2B26);
  static const Color dark3 = Color(0xFF163832);
  static const Color dark4 = Color(0xFF235347);

  // Light greens / background tints
  static const Color light1 = Color(0xFF8EB69B);
  static const Color light2 = Color(0xFFDAF1DE);

  // Neutral surface colors for the glass / neumorphic card
  static const Color surface = Color(0xFFF6FAF7);
  static const Color surfaceHighlight = Color(0xFFFFFFFF);
  static const Color textMuted = Color(0xFF6B7A73);
}
