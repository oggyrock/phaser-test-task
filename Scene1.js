class Scene1 extends Phaser.Scene {
  constructor() {
    super("selectHero");
  }

  preload() {
    this.load.image('background', 'assets/backgrounds/background.jpg');
    this.load.image('home', 'assets/buttons/Close.png');
    this.load.image('arrowRight', 'assets/buttons/Vector.png');
    this.load.image('arrowLeft', 'assets/buttons/Vector2.png');
    this.load.image('elipse', 'assets/elipces/Flirty.png');
    this.load.image('body1', 'assets/MAINHERO/start/body/1/face_f_1_body_f_regular_white_1.png');
    this.load.image('body2', 'assets/MAINHERO/start/body/3/face_f_3_body_f_regular_latino_3.png');
    this.load.image('clothes1', 'assets/MAINHERO/cloths_f_regular_16.png');
    this.load.image('clothes2', 'assets/MAINHERO/start/clothes/cloths_f_regular_8.png');
    this.load.image('clothes3', 'assets/MAINHERO/start/clothes/cloths_f_regular_9.png');
    this.load.image('hair-back1', 'assets/MAINHERO/start/hair/back/hair_f_3_back.png');
    this.load.image('hair-back2', 'assets/MAINHERO/start/hair/back/hair_f_4_back.png');
    this.load.image('hair-front1', 'assets/MAINHERO/start/hair/front/hair_f_3.png');
    this.load.image('hair-front2', 'assets/MAINHERO/start/hair/front/hair_f_4.png');
  }

  create() {
    const body = 'body1';
    this.background = this.add.image(0, 0, 'background');
    this.background.setOrigin(0, 0);
    // this.elipse = this.add.image(180, 300, 'elipse');
    // this.elipse.setScale(0.5)
    this.homeButton = this.add.image(30, 30, 'home');
    this.arrowLeft = this.add.image(30, 300, 'arrowLeft');
    this.arrowRight = this.add.image(345, 300, 'arrowRight');
    this.hairBack1 = this.add.image(180, 350, 'hair-back1');
    this.hairBack1.setScale(0.5);
    this.body1 = this.add.image(180, 350, 'body1');
    this.body1.setScale(0.5);
    this.hairFront1 = this.add.image(180, 350, 'hair-front1');
    this.hairFront1.setScale(0.5);
    this.clothes1 = this.add.image(180, 350, 'clothes1');
    this.clothes1.setScale(0.5);
  }
}