import React from 'react'
function Content() {
    return(<div>


{/*<!-- Introductory Content -->*/}
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        {/*<!-- Sample Wallpaper -->*/}
        <div class="sample-wallpaper">
         {/* <!-- Wallpaper #1 -->*/}
          <article class="wallpaper">
            <img src="../asset/img/venom-1.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>

         {/* <!-- Wallpaper #2 -->*/}
          <article class="wallpaper">
            <img src="../asset/img/hulk-1.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>

         {/* <!-- Wallpaper #3 -->*/}
          <article class="wallpaper">
            <img src="../asset/img/venom-2.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    </header>

    </div>)
    
}
export default Content