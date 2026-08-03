import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:justask/main.dart';

void main() {
  testWidgets('JustAskApp renders the login screen', (WidgetTester tester) async {
    await tester.pumpWidget(const JustAskApp());

    // Verify the login screen's welcome text is shown.
    expect(find.text('Welcome to JustAsk'), findsOneWidget);
  });
}
