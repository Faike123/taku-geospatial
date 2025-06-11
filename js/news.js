const newsItems = [
    { date: "May 2025", text: "European Geospatial Conference kicks off in Brussels." },
    { date: "April 2025", text: "Remote sensing breakthrough using open radar systems." },
    { date: "March 2025", text: "Taku featured in OpenGeo newsletter." }
  ];
  
  const newsContainer = document.getElementById("news-list");
  
  if (newsContainer) {
    newsItems.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.date}:</strong> ${item.text}`;
      newsContainer.appendChild(li);
    });
  }
  