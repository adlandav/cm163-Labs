varying vec3 vUv;
varying vec3 vColor;

void main() {
  vUv = position;

  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;
  vColor = position;
}
