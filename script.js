document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    console.log(`Name: ${name}, Email: ${email}`);
    
    // Add code here to send form data to a server or perform other actions
  });

  <script>
  const video = document.querySelector('iframe');
  const aspectRatio = 16 / 9;

  function resizeVideo() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowAspectRatio = windowWidth / windowHeight;

    if (windowAspectRatio > aspectRatio) {
      video.style.width = windowWidth + 'px';
      video.style.height = (windowWidth / aspectRatio) + 'px';
    } else {
      video.style.width = (windowHeight * aspectRatio) + 'px';
      video.style.height = windowHeight + 'px';
    }
  }

  window.addEventListener('resize', resizeVideo);
  resizeVideo();
</script>