function downloadBadge() {
  const badge = document.getElementById("badge");
  html2canvas(badge).then(canvas => {
    const link = document.createElement('a');
    link.download = 'badge-saveurs-sunday.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
