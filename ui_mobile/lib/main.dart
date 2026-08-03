import 'package:flutter/material.dart';

import 'features/authentication/presentation/screens/login_screen.dart';
import 'features/authentication/presentation/theme/app_colors.dart';

void main() {
  runApp(const JustAskApp());
}

class JustAskApp extends StatelessWidget {
  const JustAskApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JustAsk',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: AppColors.dark1,
        colorScheme: ColorScheme.fromSeed(
          seedColor: AppColors.primary,
          brightness: Brightness.dark,
          primary: AppColors.primary,
          surface: AppColors.surface,
        ),
      ),
      home: const LoginScreen(),
    );
  }
}