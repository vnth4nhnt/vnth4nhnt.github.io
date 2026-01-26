<script>
	import { Icon } from "astro-icon/components";

	let currentLang = 'en';
	
	// Detect current language from localStorage or URL
	if (typeof window !== 'undefined') {
		const storedLang = localStorage.getItem('preferred-language');
		if (storedLang && ['en', 'vi'].includes(storedLang)) {
			currentLang = storedLang;
		} else {
			// Fallback to URL detection
			const pathParts = window.location.pathname.split('/');
			if (pathParts[1] && ['en', 'vi'].includes(pathParts[1])) {
				currentLang = pathParts[1];
			}
		}
	}

	function switchLanguage() {
		const newLang = currentLang === 'vi' ? 'en' : 'vi';
		localStorage.setItem('preferred-language', newLang);
		window.location.reload(); // Reload to apply new language
	}
</script>

<button 
	aria-label="Switch Language" 
	class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"
	on:click={switchLanguage}
>
	<Icon name="material-symbols:language-rounded" class="text-[1.25rem]"></Icon>
</button>