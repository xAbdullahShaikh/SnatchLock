import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import snatch from "../public/snatch.png"

export function Nav() {
  const menuItems = ["Home", "Features", "News", "Monitoring", "Cpic"]
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between py-6 px-8"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image 
          src={snatch}
          alt="Snatchlock Logo" 
          width={150} 
          height={120}
          className="w-36 h-28"
        />
        <span className="text-xl font-bold text-white"></span>
      </Link>
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Link 
              href="#" 
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                item === "Home" ? "text-white" : "text-gray-400"
              }`}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

