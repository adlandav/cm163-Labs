uniform sampler2D texture1;
varying vec2 vUv;

vec2 coordValues;
const float F_SCALAR = 4.0;
const int I_SCALAR = 4;

float absIt(float a) {
	return (a >= 0.000)? a : -a;
}

float tileItUp(float x, float range) {
	float substractor = range;
	for (int i = 1; i < I_SCALAR; i++) {
		if (x <= substractor) {return x;}
		else if (x <= (range + substractor)) {return x - substractor;}
		else {substractor += range;}
	}
	return x;
} 

void main() {
	coordValues.x = tileItUp(vUv.x, 1.0 / F_SCALAR);
	coordValues.y = tileItUp(vUv.y, 1.0 / F_SCALAR);

	gl_FragColor = texture2D(texture1, coordValues * F_SCALAR);
}
