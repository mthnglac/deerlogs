<template>
  <div>
    <div class="spaceship">
      <div class="spaceshipBody">
        <div class="spaceshipTop"></div>
        <div class="spaceshipWindows">
          <span />
          <span />
        </div>
      </div>
      <div class="spaceshipBottom">
        <span />
        <span />
        <span />
      </div>
      <div class="fire">
        <span />
        <span />
        <span />
        <div class="glow"></div>
      </div>
    </div>
    <div class="shadow"></div>
    <div class="buttons">
      <button class="btnStart"><span>start</span></button>
      <button class="btnLaunch"><span>launch</span></button>
      <button disabled="disabled" class="btnLand disable">
        <span>land</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WagonSpaceShip',
  mounted() {
    const spaceship = document.querySelector('.spaceship')
    const fire = document.querySelector('.fire')
    const btnLaunch = document.querySelector('.btnLaunch')
    const btnLand = document.querySelector('.btnLand')
    const btnStart = document.querySelector('.btnStart')
    const txtLaunch = document.querySelector('.btnLaunch span')
    const txtLand = document.querySelector('.btnLand span')
    const txtStart = document.querySelector('.btnStart span')
    const shadow = document.querySelector('.shadow')

    btnLaunch.addEventListener('click', launch)
    btnLand.addEventListener('click', land)
    btnStart.addEventListener('click', start)

    function launch() {
      btnStart.classList.add('disable')
      fire.classList.add('burn')
      spaceship.classList.remove('land')
      spaceship.classList.add('launch')
      spaceship.removeEventListener('animationend', burn)
      shadow.style.opacity = '0'

      /* buttons */
      btnLaunch.classList.add('active')
      btnStart.disabled = true
      btnStart.classList.remove('active')
      btnLand.classList.remove('active')
      btnLand.classList.remove('disable')
      btnLand.disabled = false

      /* text buttons */
      txtLaunch.textContent = 'launched!'
      txtStart.textContent = 'start'
      txtLand.textContent = 'land'
    }

    function land() {
      spaceship.classList.remove('launch')
      spaceship.classList.add('land')
      spaceship.addEventListener('animationend', burn)

      /* buttons */
      btnLaunch.classList.remove('active')
      btnLand.classList.add('active')
      btnStart.classList.remove('disable')
      btnStart.disabled = false
      /* text buttons */
      txtLand.textContent = 'landed!'
      txtLaunch.textContent = 'launch'
    }

    function burn() {
      fire.classList.remove('burn')
      spaceship.classList.remove('land')
      shadow.style.opacity = '0.2'
      /* buttons */
      btnLand.classList.remove('active')
      btnLand.classList.add('disable')
      btnLand.disabled = true
      /* text buttons */
      txtLand.textContent = 'land'
    }

    function start() {
      if (btnStart.classList.contains('active')) {
        fire.classList.remove('burn')
        btnStart.classList.remove('active')
        txtStart.textContent = 'start'
      } else {
        fire.classList.add('burn')
        btnStart.classList.add('active')
        txtStart.textContent = 'stop'
        btnLand.classList.remove('active')
      }
    }
    // eslint-disable-next-line no-unused-vars
    function stop() {
      fire.classList.remove('burn')
    }
  },
}
</script>

<style scoped lang="scss">
$c-01: #0f1b31;
$c-02: #ace7ef;
$c-03: #4ba3b7;
$c-04: #f95959;
$c-05: #bf4c4c;

$red: #ea5455;
$orange: #ffc175;
$yellow: #ffd460;

.spaceship {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 2s ease;
  bottom: 130px;
  animation: float 2s ease infinite alternate;

  @keyframes float {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  &.launch {
    bottom: 120%;
    animation: launch 3s ease;

    @keyframes launch {
      0% {
        bottom: 130px;
        transform: translatex(2px);
      }
      10% {
        transform: translatex(-2px);
      }
      20% {
        transform: translatex(2px);
      }
      30% {
        transform: translatex(-2px);
      }

      60% {
        transform: translatex(0px);
        bottom: 150px;
      }

      100% {
        bottom: 120%;
      }
    }
  }

  &.land {
    bottom: 130px;
    animation: land 3s ease;

    @keyframes land {
      0% {
        bottom: 120%;
      }
      50% {
        bottom: 180px;
      }

      100% {
        bottom: 130px;
      }
    }
  }

  .spaceshipBody {
    width: 35%;
    height: 80%;
    background-color: white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    box-shadow: inset 0px -173px 0px -80px white,
      inset 0px -213px 0px -60px #e4e4e4;

    &:before {
      content: '';
      position: absolute;
      width: calc(100% - 36px);
      height: 42%;
      background-color: inherit;
      bottom: -30px;
      transform: perspective(10em) rotateX(-50deg);
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      box-shadow: inset 0px -33px 0px 0px rgba(0, 0, 0, 0.1);
    }
    &:after {
      content: '';
      position: absolute;
      width: 45%;
      height: 40px;
      background-color: $c-04;
      bottom: -20px;
      transform: perspective(10em) rotateX(-50deg);
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      z-index: -1;
    }

    .spaceshipTop {
      width: 100%;
      height: 240px;
      border-radius: 100%;
      overflow: hidden;
      position: relative;
      box-shadow: inset -12px 17px 0px -7px rgba(0, 0, 0, 0.15);

      &:before {
        content: '';
        background-color: $c-03;
        position: absolute;
        width: 100%;
        height: 100px;
        left: calc(50% - 54%);
        border-radius: 100%;
        top: -55px;
        border: 2px solid white;
        box-shadow: inset -18px 56px 0px 3px rgba(0, 0, 0, 0.1),
          0px 0px 0px 6px $c-04;
      }
    }
    .spaceshipWindows {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      position: absolute;

      span {
        background-color: $c-02;
        box-shadow: inset -4px 4px 0px 0px rgba(0, 0, 0, 0.3),
          inset 0px 0px 0px 2px white;
        border: 4px solid $c-04;
        z-index: 2;
        position: absolute;
        border-radius: 100%;
        overflow: hidden;
        &:before {
          position: absolute;
          content: '';
          background-color: white;
          width: 200%;
          height: 100%;
          transform: rotate(45deg);
          opacity: 0.4;
        }
      }

      span:nth-child(1) {
        width: 30px;
        height: 30px;
        top: 23%;
        &:before {
          top: 10px;
          right: 0;
        }
      }

      span:nth-child(2) {
        width: 45px;
        height: 45px;
        top: 40%;

        &:before {
          top: 12px;
          right: 0;
        }
      }
    }
  }
  .spaceshipBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    position: absolute;

    span {
      background-color: $c-03;
      border-radius: 10px;
      position: absolute;
      overflow: hidden;
      &:before {
        content: '';
        position: absolute;
        background-color: white;
        width: 2px;

        height: 120%;
        border-radius: 20px;
      }
    }

    span:nth-child(1) {
      width: 15px;
      height: 80px;
      z-index: 2;
      bottom: 2%;
      box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.18);
      &:before {
        display: none;
      }
    }

    span:nth-child(2) {
      width: 50px;
      height: 130px;
      left: 32%;
      bottom: 6%;
      transform: perspective(10em) rotateX(60deg) translateZ(-1px);
      box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.2);
      &:before {
        left: 0;
        border-right: 2px solid $c-04;
      }
    }

    span:nth-child(3) {
      width: 50px;
      height: 130px;
      right: 32%;
      bottom: 6%;
      transform: perspective(10em) rotateX(60deg) translateZ(-1px);
      box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.2);
      &:before {
        right: 0;
        border-left: 2px solid $c-04;
      }
    }
  }
  .fire {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    position: absolute;
    bottom: -50px;

    &.burn {
      span {
        border-radius: 50px;
        top: 0;
        position: absolute;
        background-color: $yellow;
        height: inherit;
        animation: fire 0.8s ease infinite alternate;
      }

      span:nth-child(1) {
        width: 6px;
        height: 40px;
        left: 44%;
        transform: translateY(27px);
        box-shadow: inset 0px -7px 10px $red, inset 0px -19px 10px $orange,
          0px -7px 10px $red;
        animation-delay: 0.2s;

        &:after {
          position: absolute;
          content: '';
          width: 4px;
          height: 60%;
          border-radius: 50px;
          background-color: $yellow;
          bottom: 0;
          transform: translate(8px, 15px);
          box-shadow: inset 0px -5px 10px $red, inset 0px -19px 10px $orange,
            0px -7px 10px $red;
        }
      }

      span:nth-child(2) {
        width: 10px;
        height: 60px;
        left: calc(50% - 8px);
        transform: translateY(35px);
        box-shadow: inset 0px -10px 10px $red, inset 0px -30px 10px $orange,
          0px -7px 10px $red;

        &:after {
          position: absolute;
          content: '';
          width: 10px;
          height: 100%;
          border-radius: 10px;
          background-color: $yellow;
          top: 0;
          transform: translate(-6px, -25px);
          box-shadow: inset 0px -5px 10px $red, inset 0px -15px 10px $orange,
            0px -7px 10px $red;
        }
      }

      span:nth-child(3) {
        width: 10px;
        height: 40px;
        right: 45%;
        transform: translateY(27px);
        box-shadow: inset 0px -5px 10px $red, inset 0px -30px 10px $orange,
          0px -7px 10px $red;
        animation-delay: 0.4s;

        &:after {
          position: absolute;
          content: '';
          width: 6px;
          height: 180%;
          border-radius: 10px;
          background-color: $yellow;
          top: 0;
          transform: translate(-6px, -15px);
          box-shadow: inset 0px -5px 10px $red, inset 0px -20px 10px $orange,
            0px -7px 10px $red;
        }
      }

      @keyframes fire {
        0% {
          height: 10px;
          bottom: 0;

          50% {
            top: 0;
          }
          100% {
            height: 20px;
            bottom: 0;
          }
        }
      }

      .glow {
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 100%;
        box-shadow: 0 0 50px 20px $red;
        opacity: 1;
        animation: glow 0.8s ease infinite alternate;

        @keyframes glow {
          0% {
            box-shadow: 0 0 50px 20px $red;
          }
          100% {
            box-shadow: 0 0 50px 25px $red;
          }
        }
      }
    }
  }
}
.shadow {
  width: 150px;
  height: 30px;
  background-color: black;
  position: absolute;
  border-radius: 100%;
  opacity: 0.2;
  bottom: 80px;
  z-index: -1;
  animation: shadow 2s ease infinite alternate;
  transition: all 0.5s ease;

  @keyframes shadow {
    0% {
      width: 150px;
    }
    100% {
      width: 120px;
    }
  }
}
.buttons {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 20px;
  left: 20px;

  button {
    width: 100px;
    height: 40px;
    background-color: $c-03;
    border: 0;
    margin: 8px;
    color: white;
    position: relative;
    overflow: hidden;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 3px;

    &.active {
      background-color: $c-04;
      &:hover {
        letter-spacing: 1px;
        color: white;
        background-color: $c-05;
        &:before,
        &:after {
          width: 0;
        }

        span {
          &:before,
          &:after {
            height: 0;
          }
        }
      }
    }

    &.disable {
      background-color: grey;
      opacity: 0.3;
      cursor: auto;

      &:hover {
        letter-spacing: 1px;
        color: white;
        &:before,
        &:after {
          width: 0;
        }

        span {
          &:before,
          &:after {
            height: 0;
          }
        }
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: $c-02;
      transition: all 0.4s ease;
      left: 0;
      top: 0;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: $c-02;
      transition: all 0.4s 0.2s ease;
      right: 0;
      bottom: 0;
    }

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      &:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 0;
        background-color: $c-02;
        transition: all 0.4s 0.3s ease;
        left: 0;
        top: 0;
      }

      &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 0;
        background-color: $c-02;
        transition: all 0.4s 0.4s ease;
        right: 0;
        bottom: 0;
      }
    }

    &:hover {
      color: $c-02;
      letter-spacing: 2px;
      &:before,
      &:after {
        width: 100%;
      }

      span {
        &:before,
        &:after {
          height: 100%;
        }
      }
    }
  }

  button:active {
    outline: none;
    border: none;
  }
  button:focus {
    outline: 0;
  }
}
</style>
