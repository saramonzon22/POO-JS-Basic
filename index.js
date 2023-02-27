class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;

    }

    publicar() {
        console.log(this.studentName + '(' + this.studentRole + ')')
        console.log(this.likes + ' likes')
        console.log(this.content)
    }
}

function videoPlay(id) {
    const url = 'www.google.es' + id
    console.log('Se está reproduciendo desde' + url)
}
function videStop(id) {
    const url = 'www.google.es' + id
    console.log('Se está pausando el video' + url)
}


class Clases {
    constructor({
        videoID,
        nombre,

    }) {
        this._videoID = videoID;
        this._nombre = nombre;

    }
    reproducir() {
        videoPlay(this.videoID)
    }
    pausar() {
        videStop(this.videoID)
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(newName) {
        if (newName === 'Curso mal de programación') {
            console.error('Que haces')
        } else {
            this._nombre = newName;
        }
    }
}

class Cursos {
    constructor({
        id,
        nombre,
        clases = [],
        isFree = false,
        lang = 'spanish'
    }) {
        this.id = id;
        this._nombre = nombre;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(newName) {
        if (newName === 'Curso mal de programación') {
            console.error('Que haces')
        } else {
            this._nombre = newName;
        }
    }
}
const course = new Cursos({ nombre: 'cursito1', isFree: true, lang: 'spanish' })
const course2 = new Cursos({ nombre: 'html', lang: 'english' })

class LearningPath {
    constructor({
        id,
        nombreEscuela,
        cursos = [],
    }) {
        this.id = id;
        this.nombreEscuela = nombreEscuela;
        this.cursos = cursos;
    }
}

const escuelaWeb = new LearningPath({
    nombreEscuela: 'Escuela de Desarrollo Web', cursos: ['HTML y CSS', 'JavaScript', course2]
});
const escuelaData = new LearningPath({
    nombreEscuela: 'Escuela de DataScience', cursos: [course, 'databussines']
});
const escuelaVgs = new LearningPath({
    nombreEscuela: 'Escuela de videojuegos', cursos: [course2]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) {
        this._name = name;
        this._email = email;
        this._username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });
        comment.publicar();
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        return this._username = newUsername;
    }

}

class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }
    cursosAprobados(newCursos) {
        if (newCursos.isFree) {
            this.approvedCourses.push(newCursos)
        } else {
            console.warn('Lo siento, ' + this.name + ', solo puedes añadir cursos gratis')
        }

    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }
    cursosAprobados(newCursos) {
        if (newCursos.lang !== 'english') {
            this.approvedCourses.push(newCursos)
        } else {
            console.warn('Lo siento, ' + this.name + ', no puedes cursar cursos en inglés')
        }

    }
}
class ExperStudent extends Student {
    constructor(props) {
        super(props)
    }
    cursosAprobados(newCursos) {
        this.approvedCourses.push(newCursos)

    }
}
class Teacher extends Student {
    constructor(props) {
        super(props)
    }
    cursosAprobados(newCursos) {
        this.approvedCourses.push(newCursos)

    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor',

        });
        comment.publicar();
    }
}


const sara = new FreeStudent({
    name: 'Sara',
    email: 'sasito@gmail.com',
    username: 'SasoSasito',
    twitter: 'shahendrix',
    learningPath: [escuelaVgs, escuelaData],

})
const mitoko = new BasicStudent({
    name: 'Mitoko',
    username: 'Mitokito',
    twitter: 'mitokous',
    instagram: 'mitokous',
    learningPath: [escuelaWeb, escuelaData]
})
const freddy = new Teacher({
    name: 'freddy',
    username: 'fredier',
    twitter: 'fredier',
    instagram: 'fredier',
})