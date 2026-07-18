import { describe, expect, it } from 'vitest';
import {
  KAABA,
  calculateDistanceKm,
  calculateQibla,
  calculateQiblaBearing,
  getRelativeQiblaBearing,
  normalizeDegrees,
  shortestAngle,
} from './qibla';

describe('Qibla calculations', () => {
  it('returns a normalized bearing to the Kaaba', () => {
    const bearing = calculateQiblaBearing({ latitude: 51.5074, longitude: -0.1278 });

    expect(bearing).toBeCloseTo(118.99, 1);
    expect(bearing).toBeGreaterThanOrEqual(0);
    expect(bearing).toBeLessThan(360);
  });

  it('calculates the bearing from Karachi toward the Kaaba', () => {
    const bearing = calculateQiblaBearing({ latitude: 24.8607, longitude: 67.0011 });

    expect(bearing).toBeCloseTo(267.7, 1);
  });

  it('returns zero at the Kaaba itself', () => {
    expect(calculateQiblaBearing(KAABA)).toBe(0);
    expect(calculateDistanceKm(KAABA)).toBeCloseTo(0, 5);
  });

  it('returns distance and bearing together', () => {
    const result = calculateQibla({ latitude: 40.7128, longitude: -74.006 });

    expect(result.bearing).toBeCloseTo(58.5, 1);
    expect(result.distanceKm).toBeGreaterThan(9000);
  });

  it('handles negative and overflowing degrees', () => {
    expect(normalizeDegrees(-1)).toBe(359);
    expect(normalizeDegrees(721)).toBe(1);
    expect(shortestAngle(270)).toBe(-90);
    expect(shortestAngle(-190)).toBe(170);
  });

  it('calculates the shortest arrow rotation', () => {
    expect(getRelativeQiblaBearing(5, 355)).toBe(10);
    expect(getRelativeQiblaBearing(355, 5)).toBe(-10);
  });
});
