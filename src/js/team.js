import {Character} from "./character.js";

class Team {
    constructor() {
       this.team = [
        new Character('Лучник', 'Bowman', 50, 1, 40, 10),
        new Character('Мечник', 'Swordsman', 50, 1, 40,10),
        new Character('Мертвец', 'Undead', 50, 1, 25, 25),
        new Character('Зомби', 'Zombie', 50, 1, 30, 15)
       ] 
    }
    createTeam() {
        let index = 0;
        const item = this.team
        return {
            next() {
                if(index> 3) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: item[index],
                    done: false

                }
            }
        }
    }
}


const person = new Team()
const team = person.createTeam()

console.log(team.next())
console.log(team.next())
console.log(team.next())
console.log(team.next())
