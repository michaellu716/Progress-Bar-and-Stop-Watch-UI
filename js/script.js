        let timerId;
		let count = 0;
		let progressCount = 0;
		const timerText = document.getElementById('timerText');
		const btnStart = document.getElementById('btnStart');
		const btnStop = document.getElementById('btnStop');
		const btnReset = document.getElementById('btnReset');
		const progress = document.getElementById('progress');
		
		btnStart.addEventListener('click', function(){
			timerId = setInterval(function(){
				count++;
				timerText.textContent = count;
			},1000)
		});
		btnStop.addEventListener('click', function(){
			clearInterval(timerId)
		});
		btnReset.addEventListener('click', function(){
			if(count >= 0){
				count = 0;
				timerText.textContent = count;
			}
		})
		
		function loadBar(seconds){
			const bar = document.querySelector('.bar');
			let percent = 0;
			
			const interval = setInterval(function(){
				bar.style.width = percent + '%';
				percent++;
				progressCount++;
				progress.textContent = progressCount + '%';
				if(progressCount >= 100){
					progressCount = 0;
				}
				if(percent >= 100){
					clearInterval(interval);
				}
			}, (seconds * 1000) / 100);
		}		