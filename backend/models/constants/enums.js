const UserRole = {
    STUDENT: 'student',
    INSTRUCTOR: 'instructor',
    ADMIN: 'admin'
};

const DifficultyLevel = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
};

const ContentType = {
    VIDEO: 'video',
    PDF: 'pdf',
    QUIZ: 'quiz',
    ASSIGNMENT: 'assignment',
    PRESENTATION: 'presentation'
};

const DefaultMaterial = {
    PROFILE_PICTURE: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login',
    COURSE_THUMBNAIL: 'https://www.coursef.com/wp-content/uploads/2020/09/course-thumbnail.jpg'
}

const QuestionType = {
    MULTIPLE_CHOICE: 'multiple_choice',
    TRUE_FALSE: 'true_false',
    SHORT_ANSWER: 'short_answer',
    ESSAY: 'essay'
}

module.exports = {
    UserRole,
    DifficultyLevel,
    ContentType,
    DefaultMaterial,
    QuestionType
};

