const express = require('express');
const router = express.Router();

const AuthRouter = require('./v1/Auth');
const EducationAreaRouter = require('./v1/EducationArea');
const ExhibitionRouter = require('./v1/Exhibition');
const ExhibitionRoomRouter = require('./v1/ExhibitionRoom');
const FAQRouter = require('./v1/FAQ');
const RecommendationRouter = require('./v1/Recommendation');
const RecommendedWebsiteRouter = require('./v1/RecommendedWebsite');
const SuggestionTypeRouter = require('./v1/SuggestionType');
const SuggestionRouter = require('./v1/Suggestion');
const QuizRouter = require('./v1/Quiz');
const SoundRouter = require('./v1/Sounds');

router.use('/auth', AuthRouter);
router.use('/education-areas', EducationAreaRouter);
router.use('/exhibitions', ExhibitionRouter);
router.use('/exhibition-rooms', ExhibitionRoomRouter);
router.use('/faqs', FAQRouter);
router.use('/recommendations', RecommendationRouter);
router.use('/recommended-websites', RecommendedWebsiteRouter);
router.use('/suggestiontypes', SuggestionTypeRouter);
router.use('/suggestions', SuggestionRouter);
router.use('/quizzes', QuizRouter);
router.use('/sounds', SoundRouter);

module.exports = router;