"use client"

import { motion } from "framer-motion"
import { Code2, FileCode } from "lucide-react"

const codeSnippets = [
  {
    id: 1,
    title: "JWT Authentication Filter",
    language: "java",
    file: "JwtAuthFilter.java",
    excerpt: `// Token validation with blacklist check
@Override
protected void doFilterInternal(HttpServletRequest request,
    HttpServletResponse response, FilterChain chain)
    throws ServletException, IOException {
    
    String token = extractToken(request);
    if (token != null && jwtService.validateToken(token)) {
        String username = jwtService.extractUsername(token);
        if (!blacklistService.isBlacklisted(token)) {
            SecurityContextHolder.getContext()
                .setAuthentication(authentication);
        }
    }
    chain.doFilter(request, response);
}`,
    tech: "Java Spring Security",
    description: "Secure token validation with blacklist support for instant logout"
  },
  {
    id: 2,
    title: "ESP32 Interrupt Handler",
    language: "cpp",
    file: "fingerprint.ino",
    excerpt: `// Fingerprint scan interrupt
void IRAM_ATTR fingerprintISR() {
  if (digitalRead(FINGERPRINT_IRQ) == LOW) {
    xSemaphoreGiveFromISR(scanSemaphore, NULL);
  }
}

// Task: Process fingerprint scan
void processScan(void* parameter) {
  while (true) {
    if (xSemaphoreTake(scanSemaphore, portMAX_DELAY)) {
      uint8_t result = fingerprint.verifyPassword();
      if (result == FINGERPRINT_OK) {
        sendToServer(fingerprint.image, fingerprint.modelId);
      }
    }
  }
}`,
    tech: "C++ / FreeRTOS",
    description: "Real-time fingerprint processing with ISR pattern"
  },
  {
    id: 3,
    title: "Dynamic Repository Query",
    language: "java",
    file: "ProjectRepository.java",
    excerpt: `@Query("SELECT p FROM Project p WHERE " +
    "LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) " +
    "AND p.category = :category " +
    "AND p.status IN :statuses " +
    "ORDER BY p.updatedAt DESC")
Page<Project> searchProjects(
    @Param("search") String search,
    @Param("category") Category category,
    @Param("statuses") List<Status> statuses,
    Pageable pageable
);`,
    tech: "Spring Data JPA",
    description: "Flexible search with dynamic filtering and pagination"
  },
  {
    id: 4,
    title: "Angular Auth Guard",
    language: "typescript",
    file: "auth.guard.ts",
    excerpt: `export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};`,
    tech: "Angular 17+",
    description: "Functional route guard with redirect preservation"
  }
]

const highlightSyntax = (code: string, language: string) => {
  return code
    .split('\n')
    .map((line, idx) => {
      let highlighted = line
        .replace(/\/\/.*/g, '<span class="text-gray-500">$&</span>')
        .replace(/\/\*\*[\s\S]*?\*\//g, '<span class="text-gray-500">$&</span>')
        .replace(/\b(public|private|protected|void|int|String|boolean|if|else|while|return|new|this|super|extends|implements|static|final|const|let|var|function|const|async|await|true|false|null)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/(['"`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="text-green-400">$&</span>')
        .replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>')
      
      return `<div key=${idx} class="hover:bg-gray-800/50 px-2 -mx-2 rounded">${highlighted}</div>`
    })
    .join('')
}

export const CodeSnippetsSection = () => {
  return (
    <section id="code" className="py-20 px-4 relative z-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-secondary mb-2 tracking-widest uppercase">
            <Code2 className="inline h-4 w-4 mr-2" />
            featured logic
          </p>
          <h2 className="section-title mb-4">Real Code</h2>
          <div className="accent-line mb-6"></div>
          <p className="section-subtitle">
            Not tutorials or toy examples. These snippets are from actual projects in production or active development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={snippet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* File header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <FileCode className="h-4 w-4 text-gray-400" />
                    <span className="font-mono text-sm text-gray-300">{snippet.file}</span>
                  </div>
                  <span className="font-mono text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                    {snippet.tech}
                  </span>
                </div>

                {/* Code block */}
                <div className="p-4 overflow-x-auto">
                  <pre className="font-mono text-sm text-gray-300 leading-relaxed">
                    <code dangerouslySetInnerHTML={{ __html: highlightSyntax(snippet.excerpt, snippet.language) }} />
                  </pre>
                </div>

                {/* Description */}
                <div className="px-4 py-3 bg-gray-800/50 border-t border-gray-700">
                  <p className="text-sm text-gray-400">{snippet.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}