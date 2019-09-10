(() => {
	'use strict';

	class AdSkip {
		constructor (className) {
			this._className = className;
			this._observer = undefined;
		}

		skip () {
			[...document.getElementsByClassName(this._className)].map(elem => {
				elem.click();
				console.log('skip')
			});
		}

		setSkipEvent () {
			this._observer = this._documentObserver();
		}

		stopSkipEvent () {
			if (!this._observer) return;
			this._observer.disconnect();
		}

		_documentObserver () {
			const observer = new MutationObserver((mutation) => this._findClassListener(mutation));
			const option = { childList: true, subtree: true };
			observer.observe(document.body, option);

			return observer;
		}

		_findClassListener (mutation) {
			mutation.forEach(m => {
				m.addedNodes.forEach(node => {
					if (!node.classList) return;
					// if (!node.classList.contains(this._className)) return;
					this.skip();
				});
			});
		}
	}

	const classNameList = ['ytp-ad-overlay-close-container', "ytp-ad-skip-button-container"];
	classNameList.map(className => {
		const adSkip = new AdSkip(className);
		adSkip.setSkipEvent();
	});
})();
