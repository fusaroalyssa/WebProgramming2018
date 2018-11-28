class UserData
{
    constructor()
    {
        this.users = [];
    }

    addUser(user)
    {
        this.users.push(user);
    }

    getUser(name)
    {
        var index = this.users.findIndex(user => user.name === name);
        return this.users[index];
    }
    login(name, fbid, access_token)
    {
        let user = this.user.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, fbid, access_token);
            this.user.push(user);
        }
        user.access_token = access_token;
        return user;
    }
}

class User
{
    
    //constructor(name, email, password)
    constructor(name, fbid, access_token)
    {
        this.name = name;
        this. fbid = fbid;
        this.access_token = access_token;
        //this.email = email;
        //this.password = password;
        this.exercises = [];
        this.friendsList = [];
        this.weights = [];
        this.meals = [];
    } 

    addExercise(exercise)
    {
        this.exercises.push(exercise);
    }

    addFriend(friend)
    {
        this.friendsList.push(friend);
    }
    
    addWeight(weight)
    {
        this.weights.push(weight);
    }

    addMeal(meal)
    {
        this.meals.push(meal);
    }
}


class Exercise
{
    constructor(date, exName, hour, min, sec)
    {
        this.date = date;
        this.exName = exName;
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.videoLink;
    }
}

class Friend
{
    constructor(name)
    {
        this.name = name;
    }
}

class Weight
{
    constructor(date, weight)
    {
        this.date = date;
        this.weight = weight;
    }
}

class Meal
{
    constructor(date, mealTime, food)
    {
        this.date = date;
        this.mealTime = mealTime;
        this.food = food;
    }
}

module.exports = {
    UserData, User, Exercise, Friend, Weight, Meal
}