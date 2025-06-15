import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
const SpringModal = ({ isOpen, setIsOpen, video }) => {
  console.log("video :", video);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-700 rounded-lg overflow-hidden w-full max-w-6xl p-6 relative"
          >
            <div className="absolute top-2 right-2">
              <button
                className="text-black float-right  text-2xl"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes className="text-white" />
              </button>
            </div>
            <div className="p-2 lg:p-4">
              <iframe
                className="w-full h-64 sm:h-64 md:h-80 lg:h-[500px] object-cover"
                src={`https://www.youtube.com/embed/${video}`}
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
