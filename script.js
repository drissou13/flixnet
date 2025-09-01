<h3>${m.title || m.original_title}</h3>
<p>${(m.overview || '').slice(0, 100)}</p>
function renderCarousel(container, movies){
    container.innerHTML='';
    if(!movies || movies.length===0){ container.innerHTML='<p>Aucun film trouvé.</p>'; return; }
    movies.forEach(m=>{
        const card = document.createElement('div'); card.className='movie-card';
        const titleFR = m.title || m.original_title; // titre français ou fallback
        const overviewFR = m.overview || '';
        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${m.poster_path}" alt="${titleFR}">
            <div>
                <h3>${titleFR}</h3>
                <p>${overviewFR.slice(0,100)}</p>
                <p><strong>Sortie:</strong> ${m.release_date}</p>
            </div>
        `;
        container.appendChild(card);
    });
}
