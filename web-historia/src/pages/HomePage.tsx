import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { topicGroups, allTopics } from '../data/topics';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function HomePage() {
  const availableTopics = allTopics;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="mb-4 text-6xl">📖</div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Historia Interactiva
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-500 dark:text-gray-400">
          Explora los grandes eventos que han marcado la humanidad. Timelines, flashcards y quizzes
          para aprender de forma activa.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-12 grid grid-cols-3 gap-4"
      >
        {[
          { label: 'Temas disponibles', value: availableTopics.length, icon: '📚' },
          { label: 'Flashcards', value: availableTopics.reduce((a, t) => a + t.flashcards.length, 0), icon: '🃏' },
          { label: 'Preguntas de quiz', value: availableTopics.reduce((a, t) => a + t.quiz.length, 0), icon: '❓' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="rounded-2xl border border-gray-200 bg-white p-5 text-center dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="text-2xl">{stat.icon}</div>
            <div className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Available topics */}
      {availableTopics.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            Temas disponibles
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-4 sm:grid-cols-2"
          >
            {availableTopics.map((topic) => (
              <motion.div key={topic.id} variants={itemVariants}>
                <Link
                  to={`/tema/${topic.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                      {topic.block}
                    </span>
                    <span className="text-xs text-gray-400">{topic.period}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300">
                    {topic.title}
                  </h3>
                  {topic.subtitle && (
                    <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {topic.subtitle}
                    </p>
                  )}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {topic.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {topic.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-xs text-gray-400 dark:text-gray-500">
                    <span>⏱ {topic.timeline.length} eventos</span>
                    <span>🃏 {topic.flashcards.length} tarjetas</span>
                    <span>❓ {topic.quiz.length} preguntas</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Upcoming blocks */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
          Próximos bloques
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topicGroups
            .filter((g) => g.topics.length === 0)
            .map((group) => (
              <div
                key={group.id}
                className="flex items-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900/50"
              >
                <span className="text-xl">{group.icon}</span>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {group.title}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{group.period}</div>
                </div>
                <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-400 dark:bg-gray-800">
                  Próximamente
                </span>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
