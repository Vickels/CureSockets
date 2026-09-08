export function getDeviceType(): string {
	const ua = navigator.userAgent;
	const w = window.innerWidth;
	if (/Tablet|iPad/i.test(ua) || (w >= 768 && w < 1024)) {return 'tablet';}
  if (/Mobi|Android|iPhone/i.test(ua) || w < 768){return 'mobile';}
	return 'desktop';
}