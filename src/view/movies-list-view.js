export const createMoviesListTemplate = (moviesAmount) => {
    return `
        <section class="films">
            <section class="films-list">
            <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

            ${moviesAmount ? `
            <div class="films-list__container">
            </div>

            <button class="films-list__show-more">Show more</button>
            </section>
            `: `
                <h2 class="films-list__title">There are no movies in our database</h2>
            ` }
            
        </section>
    `;
}