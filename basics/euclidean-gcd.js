function euclidean_gcd(a, b) {
  return b ? euclidean_gcd(b, a % b) : a;
}
