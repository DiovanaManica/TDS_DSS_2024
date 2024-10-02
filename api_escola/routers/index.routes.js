const professorRoutes = require('./routes/professorRoutes');
const turmaRoutes = require('./routes/turmaRoutes');

const router = express.Router();

// Configurando as rotas de aluno
router.use('/alunos', alunoRoutes);

// Configurando as rotas de professor
router.use('/professores', professorRoutes);

// Configurando as rotas de turma
router.use('/turmas', turmaRoutes);

module.exports = router;