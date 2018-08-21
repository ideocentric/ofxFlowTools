#version 150

uniform sampler2DRect Velocity;
uniform float Alpha;
uniform float Beta;

in vec2 texCoordVarying;
out vec4 fragColor;

void main(){
	vec2 st = texCoordVarying;
	vec2 vL = texture(Velocity, st - vec2(1, 0)).xy;
	vec2 vR = texture(Velocity, st + vec2(1, 0)).xy;
	vec2 vB = texture(Velocity, st - vec2(0, 1)).xy;
	vec2 vT = texture(Velocity, st + vec2(0, 1)).xy;
	vec2 vel = texture(Velocity, st).xy;
	vec2 diffusion = (vel + Alpha * (vL + vR + vB + vT)) / Beta;
	fragColor = vec4(diffusion, 0.0, 0.0);
}

