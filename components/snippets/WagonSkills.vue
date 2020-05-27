<template>
  <div class="u-center">
    <section class="skills">
      <div class="skill">
        <h3 class="skill__type">PYTHON</h3>
        <div class="skill__outer-bar">
          <div class="skill__inner-bar skill_python__inner-bar"></div>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__type">DJANGO</h3>
        <div class="skill__outer-bar">
          <div class="skill__inner-bar skill_django__inner-bar"></div>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__type">JAVASCRIPT</h3>
        <div class="skill__outer-bar">
          <div class="skill__inner-bar skill_js__inner-bar"></div>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__type">VUEJS</h3>
        <div class="skill__outer-bar">
          <div class="skill__inner-bar skill_vue__inner-bar"></div>
        </div>
      </div>
      <div class="skill">
        <h3 class="skill__type">REACTJS</h3>
        <div class="skill__outer-bar">
          <div class="skill__inner-bar skill_react__inner-bar"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WagonSkills'
}
</script>

<style scoped lang="scss">
.u-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills {
  display: flex;
  flex-direction: column;
  align-self: center;
}
.skill {
  margin: 1em 0;
  position: relative;
  width: 22.5em;
}
.skill__type {
  color: #fff;
  font-weight: 300;
  font-size: 0.8em;
  letter-spacing: 0.145em;
  text-transform: uppercase;
  width: 10em;
}
.skill__outer-bar,
.skill__inner-bar {
  height: 0.75em;
}
.skill__outer-bar {
  margin-top: 1em;
  background: #333;
}
.skill__inner-bar {
  animation: fillBar 1s forwards;
  transform: scaleX(0);
  transform-origin: 0 0;
}
.skill_python__inner-bar {
  width: 95%;
  background: #08475f;
}
.skill_django__inner-bar {
  width: 90%;
  background: #13583e;
}
.skill_js__inner-bar {
  width: 90%;
  background: #ecd51d;
}
.skill_vue__inner-bar {
  width: 80%;
  background: #e68524;
}
.skill_react__inner-bar {
  width: 85%;
  background: #e24b3e;
}
@keyframes fillBar {
  to {
    transform: scaleX(1);
  }
}
</style>
