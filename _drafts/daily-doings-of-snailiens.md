---
title: "Residents of Snail Planet"
excerpt: "A brief 2d animation introducing the residents of Hansell Tree (the far-far-away planet). <br/><img width='300' height='600' src='/images/art/resident-snails.gif'>"
collection: project
layout: archive
---



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<style>

body {
  background-image: url('img_girl.jpg');
}


body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* ---------- FILTER BUTTONS ---------- */

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.filters button {
  background: linear-gradient(145deg, #fcfff1, #e6f5ad);
  color: #3d4a2a;

  border: 1px solid rgba(120, 150, 90, 0.35);
  border-radius: 12px;

  padding: 10px 18px;
  margin: 6px;

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;

  cursor: pointer;

  box-shadow: 0 4px 10px rgba(90, 120, 60, 0.15);

  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;
}

.filters button:hover {
  transform: translateY(-2px);
  background: linear-gradient(145deg, #eefaa8, #dff08f);
  box-shadow: 0 6px 14px rgba(90, 120, 60, 0.2);
}

.filters button.active {
  background: linear-gradient(145deg, #eaf7a8, #d6ea7d);
  border: 1px solid rgba(90, 120, 60, 0.5);
  box-shadow: 0 6px 14px rgba(90, 120, 60, 0.25);
  transform: translateY(-1px);
}

/* ---------- GALLERY GRID ---------- */

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  /* max-width: 1100px; */

  margin: 0 auto;
}

.gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gallery img:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

/* ---------- VIDEO STYLING ---------- */

.video-thumb {
  position: relative;
  width: 100%;
  width:220px;
  height: 392px;
}

.video-thumb img {
  width: 100%;
  height:100%;
  display: block;
  border-radius: 10px;
  object-fit: fill;
  transition: transform 0.2s ease, filter 0.2s ease;
}

/* hover effect */
.youtube-item:hover img {
  transform: scale(1.02);
  filter: brightness(0.85);
}

/* play button */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 55px;
  height: 55px;

  background: rgba(0, 0, 0, 0.55);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 20px;
  padding-left: 3px;

  pointer-events: none;
}

/* hover animation */
.youtube-item:hover .play-button {
  transform: translate(-50%, -50%) scale(1.05);
  background: rgba(0, 0, 0, 0.7);
}

</style>


<script defer src="{{ '/assets/js/portfolio.js' | relative_url }}"></script>


<h1>how I turned a watercolor painting into a 2d animation<h1>

<!-- <video width="500" height="1000" autoplay loop controls>
  <source src="/images/art/resident-snails.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video> -->



<div class="gallery">
<a  href="/images/art/another snail planet.png" class="glightbox">
  <img width="500" height="1000" class="painting" src="/images/art/another snail planet.png">
</a>

<a  href="/images/art/resident-snails.mp4" class="glightbox">
    <video width="500" height="1000" autoplay loop controls>
    <source src="/images/art/resident-snails.mp4" type="video/mp4">
    <!-- <source src="/images/art/resident-snails.mov" type="video/mov"> -->
        Your browser does not support the video tag.
    </video>
</a>
</div>