import 'dart:math' as math;
import 'package:flutter/material.dart';

/// Paints a simplified, dependency-free version of the multi-color Google
/// "G" mark so the button doesn't need a bundled image asset.
class GoogleLogoPainter extends CustomPainter {
  const GoogleLogoPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final double radius = size.width / 2;
    final Offset center = Offset(size.width / 2, size.height / 2);
    final double strokeWidth = size.width * 0.22;
    final double innerRadius = radius - strokeWidth / 2;

    final Paint arcPaint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..strokeCap = StrokeCap.butt;

    void drawArc(double startDeg, double sweepDeg, Color color) {
      arcPaint.color = color;
      canvas.drawArc(
        Rect.fromCircle(center: center, radius: innerRadius),
        _toRad(startDeg),
        _toRad(sweepDeg),
        false,
        arcPaint,
      );
    }

    // Four arcs approximating the Google "G" ring colors.
    drawArc(-90, 80, const Color(0xFF4285F4)); // blue
    drawArc(-10, 100, const Color(0xFF34A853)); // green
    drawArc(90, 80, const Color(0xFFFBBC05)); // yellow
    drawArc(170, 100, const Color(0xFFEA4335)); // red

    // Horizontal bar that completes the "G" shape.
    final Paint barPaint = Paint()..color = const Color(0xFF4285F4);
    final double barHeight = strokeWidth * 0.92;
    canvas.drawRect(
      Rect.fromLTWH(
        center.dx,
        center.dy - barHeight / 2,
        innerRadius + strokeWidth / 2,
        barHeight,
      ),
      barPaint,
    );
  }

  double _toRad(double degrees) => degrees * math.pi / 180;

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
