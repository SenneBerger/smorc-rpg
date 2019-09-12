import { CST } from "../CST"

export class PlayScene extends Phaser.Scene{
    // smorc!: Phaser.GameObjects.Sprite;
    // keyboard!: {[index: string] : Phaser.Input.Keyboard.Key};
    constructor(){
        super({
            key: CST.SCENES.PLAY
        })
    }
    init(){

    }
    preload(){
        this.anims.create({
            key: "down",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("smorc", {
                start: 131,
                end: 138,
            })
        })
        this.anims.create({
            key: "up",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("smorc", {
                start: 105,
                end: 112,
            })
        })
        this.anims.create({
            key: "right",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("smorc", {
                start: 144,
                end: 151,
            })
        })
        this.anims.create({
            key: "left",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("smorc", {
                start: 117,
                end: 124,
            })
        })
        this.anims.create({
            key: "swingDown",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("smorc", {
                frames: [195,196,197,198,199,200,198,195]
                
            })
        })

    }
    create(){
        this.add.image(0,0, "map").setOrigin(0).setScale(1.5);
        this.smorc = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height * 0.5, "smorc");
        let quitButton = this.add.image(720,50, "quit")

        quitButton.setInteractive();

        quitButton.on ("pointerover", ()=>{
            quitButton.setScale(1.3);
        })

        quitButton.on ("pointerout", ()=>{
            quitButton.setScale(1);         
        })

        quitButton.on ("pointerup", ()=>{   
            this.sound.stopAll("title_music")  
            this.scene.start(CST.SCENES.MENU)      
        })

        window.smorc = this.smorc;
        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D, E");
        this.cameras.main.startFollow(this.smorc)
        
    }
    update(time, delta){
        //down
        if(this.keyboard.S.isDown === true){
            this.smorc.y = this.smorc.y + 128 * (delta / 1000);
            this.smorc.play("down", true)
        }
        //up
        if(this.keyboard.Z.isDown === true){
            this.smorc.y = this.smorc.y - 128 * (delta / 1000);
            this.smorc.play("up", true)
        }
        //right
        if(this.keyboard.D.isDown === true){
            this.smorc.x = this.smorc.x + 128 * (delta / 1000);
            this.smorc.play("right", true)
        }
        //left
        if(this.keyboard.Q.isDown === true){
            this.smorc.x = this.smorc.x - 128 * (delta / 1000);
            this.smorc.play("left", true)
        }
        if(this.keyboard.E.isDown === true){
            
            this.smorc.play("swingDown", true)
        }
        
    }
}
