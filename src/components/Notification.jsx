import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-50"
        >
          <div className="bg-gray-900 border border-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 max-w-[calc(100vw-2rem)] md:max-w-md">
            <div className="text-green-500 font-mono flex-shrink-0">&gt;</div>
            <p className="font-mono text-sm md:text-base flex-grow">{message}</p>
            <button
              onClick={onClose}
              className="ml-2 text-gray-400 hover:text-green-500 transition-colors flex-shrink-0"
            >
              <span className="font-mono text-xl">&times;</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification; 