varying vec3 vUv;
uniform vec3 colorA;
uniform vec3 colorB;

varying vec3 vColor;

void main() {

	//gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
	gl_FragColor = vec4(vColor, 1.0) ;
	//gl_FragColor = vec4(sin(vColor), 1.0);
}