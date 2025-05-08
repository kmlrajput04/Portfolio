// blogContentLoader.js
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButton = document.getElementById("blog1");

  if (readMoreButton) {
    readMoreButton.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.id = "blog-overlay";
      overlay.style.cssText = `
              position: fixed;
              top: 0; left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0,0,0,0.9);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
              backdrop-filter: blur(5px);
              overflow-y: auto;
          `;

      const container = document.createElement("div");
      container.id = "blog-container";
      container.style.cssText = `
              background: var(--light-secondary);
              padding: 3rem;
              width: 85%;
              max-width: 1200px;
              max-height: 90vh;
              overflow-y: auto;
              border-radius: var(--border-radius);
              box-shadow: var(--box-shadow);
              font-family: 'Inter', sans-serif;
              color: var(--dark);
              line-height: 1.7;
              position: relative;
          `;

      container.innerHTML = `
              <button id="close-overlay" style="
                  position: absolute;
                  top: 1rem;
                  right: 1rem;
                  background: transparent;
                  border: none;
                  font-size: 1.5rem;
                  cursor: pointer;
                  color: var(--gray-dark);
              ">×</button>

              <header style="margin-bottom: 3rem; text-align: center;">
                  <h1 style="
                      color: var(--dark);
                      font-size: 2.5rem;
                      margin-bottom: 1rem;
                      font-weight: 700;
                      line-height: 1.3;
                  ">
                      The Complete Guide to Advanced React Performance Optimization
                  </h1>
                  <div style="
                      width: 80px;
                      height: 4px;
                      background: linear-gradient(90deg, var(--primary), var(--secondary));
                      margin: 0 auto 1.5rem;
                      border-radius: 2px;
                  "></div>
                  <p style="color: var(--gray-dark); max-width: 700px; margin: 0 auto; font-size: 1.1rem;">
                      Master professional techniques to build blazing-fast React applications with measurable results. 
                      Comprehensive strategies covering rendering, virtualization, profiling, and advanced patterns.
                  </p>
              </header>

              <article style="font-size: 1.05rem;">
                  <!-- Table of Contents -->
                  <section style="
                      background: var(--light);
                      padding: 2rem;
                      border-radius: var(--border-radius);
                      margin-bottom: 3rem;
                  ">
                      <h2 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin-top: 0;
                          margin-bottom: 1.5rem;
                      ">Table of Contents</h2>
                      <div style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                          gap: 1rem;
                      ">
                          <div>
                              <h3 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Core Concepts</h3>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">1. Introduction</li>
                                  <li style="margin-bottom: 0.3rem;">2. Concurrent Rendering</li>
                                  <li style="margin-bottom: 0.3rem;">3. Virtualization</li>
                              </ul>
                          </div>
                          <div>
                              <h3 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Measurement</h3>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">4. Profiling Tools</li>
                                  <li style="margin-bottom: 0.3rem;">5. Performance Metrics</li>
                              </ul>
                          </div>
                          <div>
                              <h3 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Optimization</h3>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">6. Code Splitting</li>
                                  <li style="margin-bottom: 0.3rem;">7. Rendering Control</li>
                              </ul>
                          </div>
                          <div>
                              <h3 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Advanced</h3>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">8. Context Optimization</li>
                                  <li style="margin-bottom: 0.3rem;">9. TypeScript Tips</li>
                              </ul>
                          </div>
                      </div>
                  </section>

                  <!-- Section 1: Introduction -->
                  <section style="margin-bottom: 4rem;">
                      <h2 style="
                          color: var(--dark);
                          font-size: 1.8rem;
                          margin-bottom: 1.5rem;
                          padding-bottom: 0.75rem;
                          border-bottom: 2px solid var(--primary);
                      ">
                          <span style="color: var(--primary);">1.</span> Introduction to React Performance
                      </h2>
                      
                      <div style="display: flex; gap: 2rem; margin-bottom: 2rem; align-items: center;">
                          <div style="flex: 1;">
                              <p style="margin-bottom: 1.5rem;">
                                  In today's competitive digital landscape, React application performance directly impacts 
                                  <strong>user retention, conversion rates, and search engine rankings</strong>. Google's research shows 
                                  that pages meeting their Core Web Vitals thresholds have <strong>24% lower abandonment rates</strong>.
                              </p>
                              <p style="margin-bottom: 1.5rem;">
                                  This comprehensive guide explores professional optimization techniques that go beyond basic 
                                  React.memo and useMemo usage, diving deep into architectural patterns that can transform 
                                  your application's performance metrics across multiple dimensions.
                              </p>
                              <div style="
                                  background: var(--light);
                                  padding: 1.5rem;
                                  border-radius: var(--border-radius);
                              ">
                                  <h4 style="
                                      color: var(--primary-dark);
                                      margin-top: 0;
                                      margin-bottom: 1rem;
                                  ">Real-World Impact</h4>
                                  <p style="margin-bottom: 0;">
                                      In our case study with a Fortune 500 e-commerce platform, implementing these techniques 
                                      reduced Time to Interactive by 62%, increased Lighthouse scores from 48 to 92, and 
                                      improved conversion rates by 18%.
                                  </p>
                              </div>
                          </div>
                          <div style="flex: 1;">
                              <img src="/portfolio/blogs images/Screenshot 2025-04-24 122901.png" alt="Performance metrics dashboard" 
                              style="width: 100%; border-radius: var(--border-radius); box-shadow: var(--box-shadow);">
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Key Performance Indicators</h3>
                      
                      <div style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                          gap: 1.5rem;
                          margin-bottom: 2rem;
                      ">
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-top: 3px solid var(--primary);
                          ">
                              <h4 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Loading Performance</h4>
                              <p style="margin-bottom: 0;">
                                  First Contentful Paint (FCP), Largest Contentful Paint (LCP), and bundle size optimization
                              </p>
                          </div>
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-top: 3px solid var(--secondary);
                          ">
                              <h4 style="
                                  color: var(--secondary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Interaction Responsiveness</h4>
                              <p style="margin-bottom: 0;">
                                  First Input Delay (FID), input latency, and render performance during user interactions
                              </p>
                          </div>
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-top: 3px solid var(--tertiary);
                          ">
                              <h4 style="
                                  color: var(--tertiary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Visual Stability</h4>
                              <p style="margin-bottom: 0;">
                                  Cumulative Layout Shift (CLS) and smooth scrolling performance
                              </p>
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Performance Optimization Spectrum</h3>
                      
                      <img src="/portfolio/blogs images/Screenshot 2025-04-24 122928.png" alt="React optimization techniques spectrum" 
                      style="width: 100%; margin-bottom: 2rem; border-radius: var(--border-radius);">
                      
                      <p style="margin-bottom: 1.5rem;">
                          React performance optimization exists on a spectrum from quick wins to architectural changes. 
                          Effective optimization requires understanding where your application falls on this spectrum 
                          and applying the appropriate techniques.
                      </p>
                      
                      <div style="
                          background: var(--primary-light);
                          padding: 1.5rem;
                          border-radius: var(--border-radius);
                          margin-bottom: 2rem;
                      ">
                          <h4 style="
                              color: var(--primary-dark);
                              margin-top: 0;
                              margin-bottom: 1rem;
                          ">Optimization Roadmap</h4>
                          <ol style="margin-bottom: 0; padding-left: 1.5rem;">
                              <li style="margin-bottom: 0.5rem;"><strong>Measure:</strong> Establish baseline metrics</li>
                              <li style="margin-bottom: 0.5rem;"><strong>Diagnose:</strong> Identify bottlenecks</li>
                              <li style="margin-bottom: 0.5rem;"><strong>Implement:</strong> Apply targeted optimizations</li>
                              <li style="margin-bottom: 0.5rem;"><strong>Verify:</strong> Measure impact</li>
                              <li><strong>Iterate:</strong> Repeat the process</li>
                          </ol>
                      </div>
                  </section>

                  <!-- Section 2: Concurrent Rendering -->
                  <section style="margin-bottom: 4rem;">
                      <h2 style="
                          color: var(--dark);
                          font-size: 1.8rem;
                          margin-bottom: 1.5rem;
                          padding-bottom: 0.75rem;
                          border-bottom: 2px solid var(--primary);
                      ">
                          <span style="color: var(--primary);">2.</span> Concurrent Rendering in React
                      </h2>
                      
                      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
                          <div style="flex: 1;">
                              <h3 style="
                                  color: var(--dark);
                                  font-size: 1.4rem;
                                  margin: 0 0 1rem;
                              ">The Concurrent Rendering Revolution</h3>
                              <p style="margin-bottom: 1rem;">
                                  Concurrent rendering represents a fundamental shift in React's architecture, introducing 
                                  interruptible rendering and priority-based update scheduling. This enables:
                              </p>
                              <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                                  <li style="margin-bottom: 0.5rem;">Non-blocking rendering of complex component trees</li>
                                  <li style="margin-bottom: 0.5rem;">Smoother UI interactions during heavy computations</li>
                                  <li style="margin-bottom: 0.5rem;">Better handling of slow network responses</li>
                                  <li>More predictable performance under load</li>
                              </ul>
                              <div style="
                                  background: var(--light);
                                  padding: 1.5rem;
                                  border-radius: var(--border-radius);
                              ">
                                  <p style="margin-bottom: 0;">
                                      <strong>Key Benefit:</strong> In benchmarks, concurrent rendering reduced input latency 
                                      by 300-400% during CPU-intensive operations.
                                  </p>
                              </div>
                          </div>
                          <div style="flex: 1;">
                              <img src="/portfolio/blogs images/Screenshot 2025-04-24 181319.png" alt="Concurrent rendering flow diagram" 
                              style="width: 100%; border-radius: var(--border-radius);">
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Core Concurrent Features</h3>
                      
                      <div style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                          gap: 1.5rem;
                          margin-bottom: 2rem;
                      ">
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              box-shadow: var(--box-shadow-sm);
                          ">
                              <h4 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 1rem;
                              ">startTransition API</h4>
                              <p style="margin-bottom: 1rem;">
                                  Marks non-critical state updates that can be interrupted by more important updates like 
                                  user interactions.
                              </p>
                              <pre style="
                                  background: var(--dark-tertiary);
                                  padding: 1rem;
                                  border-radius: calc(var(--border-radius) - 2px);
                                  overflow-x: auto;
                                  color: var(--light);
                                  font-size: 0.9rem;
                              "><code>function SearchResults() {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleChange = (e) => {
  const value = e.target.value;
  setQuery(value); // Urgent update (immediate)
  
  startTransition(() => {
    setResults(computeExpensiveResults(value)); // Can be interrupted
  });
};

return (
  &lt;&gt;
    &lt;input value={query} onChange={handleChange} /&gt;
    {isPending ? &lt;Spinner /&gt; : &lt;Results data={results} /&gt;}
  &lt;/&gt;
);
}</code></pre>
                          </div>
                          
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              box-shadow: var(--box-shadow-sm);
                          ">
                              <h4 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 1rem;
                              ">useTransition Hook</h4>
                              <p style="margin-bottom: 1rem;">
                                  Provides pending state flag for building smooth loading experiences during transitions.
                              </p>
                              <pre style="
                                  background: var(--dark-tertiary);
                                  padding: 1rem;
                                  border-radius: calc(var(--border-radius) - 2px);
                                  overflow-x: auto;
                                  color: var(--light);
                                  font-size: 0.9rem;
                              "><code>function ImageGallery() {
const [resource, setResource] = useState(initialResource);
const [isPending, startTransition] = useTransition();

function handleClick() {
  startTransition(() => {
    setResource(fetchNewData()); // Non-urgent update
  });
}

return (
  &lt;&gt;
    &lt;button 
      onClick={handleClick}
      disabled={isPending}
      style={{
        opacity: isPending ? 0.7 : 1,
        transition: 'opacity 0.2s'
      }}
    &gt;
      Load More
    &lt;/button&gt;
    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
      &lt;Photos resource={resource} /&gt;
    &lt;/Suspense&gt;
  &lt;/&gt;
);
}</code></pre>
                          </div>
                          
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              box-shadow: var(--box-shadow-sm);
                          ">
                              <h4 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 1rem;
                              ">Suspense for Data Fetching</h4>
                              <p style="margin-bottom: 1rem;">
                                  Coordinate loading states across components with declarative fallback UIs.
                              </p>
                              <pre style="
                                  background: var(--dark-tertiary);
                                  padding: 1rem;
                                  border-radius: calc(var(--border-radius) - 2px);
                                  overflow-x: auto;
                                  color: var(--light);
                                  font-size: 0.9rem;
                              "><code>function ProfilePage() {
return (
  &lt;Suspense fallback={&lt;ProfileSkeleton /&gt;}&gt;
    &lt;ProfileDetails /&gt;
    &lt;ErrorBoundary&gt;
      &lt;Suspense fallback={&lt;PostsSkeleton /&gt;}&gt;
        &lt;ProfilePosts /&gt;
      &lt;/Suspense&gt;
    &lt;/ErrorBoundary&gt;
  &lt;/Suspense&gt;
);
}

// Data fetching inside components
function ProfileDetails() {
const user = use(fetchUser()); // Suspense-enabled fetch
return &lt;h1&gt;{user.name}&lt;/h1&gt;;
}</code></pre>
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Production Integration Strategies</h3>
                      
                      <div style="
                          background: var(--primary-light);
                          padding: 1.5rem;
                          border-radius: var(--border-radius);
                          margin-bottom: 2rem;
                      ">
                          <h4 style="
                              color: var(--primary-dark);
                              margin-top: 0;
                              margin-bottom: 1rem;
                          ">Gradual Adoption Framework</h4>
                          
                          <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
                              <div style="flex: 1;">
                                  <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Phase 1: Non-Critical Paths</h5>
                                  <ul style="margin: 0; padding-left: 1.2rem;">
                                      <li style="margin-bottom: 0.3rem;">Search results loading</li>
                                      <li style="margin-bottom: 0.3rem;">Background data prefetching</li>
                                      <li>Secondary dashboard widgets</li>
                                  </ul>
                              </div>
                              <div style="flex: 1;">
                                  <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Phase 2: Core Interactions</h5>
                                  <ul style="margin: 0; padding-left: 1.2rem;">
                                      <li style="margin-bottom: 0.3rem;">Form submissions</li>
                                      <li style="margin-bottom: 0.3rem;">Navigation transitions</li>
                                      <li>Data table filtering</li>
                                  </ul>
                              </div>
                              <div style="flex: 1;">
                                  <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Phase 3: Full Integration</h5>
                                  <ul style="margin: 0; padding-left: 1.2rem;">
                                      <li style="margin-bottom: 0.3rem;">Authentication flows</li>
                                      <li style="margin-bottom: 0.3rem;">Checkout processes</li>
                                      <li>Real-time updates</li>
                                  </ul>
                              </div>
                          </div>
                          
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: calc(var(--border-radius) - 2px);
                          ">
                              <h5 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 1rem;
                              ">Monitoring Checklist</h5>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">Track transition durations with performance.mark()</li>
                                  <li style="margin-bottom: 0.3rem;">Monitor suspense fallback occurrences</li>
                                  <li style="margin-bottom: 0.3rem;">Measure input delay during transitions</li>
                                  <li>Verify no increase in memory usage</li>
                              </ul>
                          </div>
                      </div>
                      
                      <div style="
                          background: var(--secondary-light);
                          padding: 1.5rem;
                          border-radius: var(--border-radius);
                          margin-bottom: 2rem;
                      ">
                          <h4 style="
                              color: var(--secondary-dark);
                              margin-top: 0;
                              margin-bottom: 1rem;
                          ">Case Study: E-Commerce Platform</h4>
                          
                          <div style="display: flex; gap: 2rem;">
                              <div style="flex: 1;">
                                  <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Before Optimization</h5>
                                  <ul style="margin: 0; padding-left: 1.2rem;">
                                      <li style="margin-bottom: 0.3rem;">Search latency: 300-500ms</li>
                                      <li style="margin-bottom: 0.3rem;">22% cart abandonment</li>
                                      <li>Mobile conversion rate: 1.8%</li>
                                  </ul>
                              </div>
                              <div style="flex: 1;">
                                  <h5 style="color: var(--dark); margin-bottom: 0.5rem;">After Optimization</h5>
                                  <ul style="margin: 0; padding-left: 1.2rem;">
                                      <li style="margin-bottom: 0.3rem;">Search latency: 50-80ms</li>
                                      <li style="margin-bottom: 0.3rem;">Cart abandonment: 12%</li>
                                      <li>Mobile conversion rate: 2.7%</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>

                  <!-- Section 3: Virtualization Techniques -->
                  <section style="margin-bottom: 4rem;">
                      <h2 style="
                          color: var(--dark);
                          font-size: 1.8rem;
                          margin-bottom: 1.5rem;
                          padding-bottom: 0.75rem;
                          border-bottom: 2px solid var(--primary);
                      ">
                          <span style="color: var(--primary);">3.</span> Virtualization Techniques
                      </h2>
                      
                      <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
                          <div style="flex: 1;">
                              <h3 style="
                                  color: var(--dark);
                                  font-size: 1.4rem;
                                  margin: 0 0 1rem;
                              ">The Virtualization Advantage</h3>
                              <p style="margin-bottom: 1rem;">
                                  Virtualization solves the critical performance bottleneck of rendering large datasets by only 
                                  creating DOM nodes for items currently visible in the viewport. This technique provides:
                              </p>
                              <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                                  <li style="margin-bottom: 0.5rem;"><strong>90-95% memory reduction</strong> for large lists</li>
                                  <li style="margin-bottom: 0.5rem;"><strong>10-100x faster</strong> initial render times</li>
                                  <li style="margin-bottom: 0.5rem;">Buttery smooth <strong>60fps scrolling</strong></li>
                                  <li>Reduced <strong>CPU and GPU workload</strong></li>
                              </ul>
                              <div style="
                                  background: var(--light);
                                  padding: 1.5rem;
                                  border-radius: var(--border-radius);
                              ">
                                  <p style="margin-bottom: 0;">
                                      <strong>Technical Insight:</strong> A 10,000 item list that might take 1200ms to render 
                                      traditionally can render in under 10ms with virtualization while using 90% less memory.
                                  </p>
                              </div>
                          </div>
                          <div style="flex: 1;">
                              <img src="/portfolio/blogs images/Advanced React Performance Optimization Techniques - visual selection (3).png" alt="Virtualization architecture diagram" 
                              style="width: 100%; border-radius: var(--border-radius);">
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">When to Implement Virtualization</h3>
                      
                      <div style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                          gap: 1.5rem;
                          margin-bottom: 2rem;
                      ">
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-left: 4px solid var(--primary);
                          ">
                              <h4 style="
                                  color: var(--primary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Definitely Virtualize</h4>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">Data tables with 100+ rows</li>
                                  <li style="margin-bottom: 0.3rem;">Infinite scroll feeds</li>
                                  <li style="margin-bottom: 0.3rem;">Large tree structures</li>
                                  <li>Dashboard widget grids</li>
                              </ul>
                          </div>
                          
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-left: 4px solid var(--secondary);
                          ">
                              <h4 style="
                                  color: var(--secondary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Consider Virtualization</h4>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">Lists with 50-100 complex items</li>
                                  <li style="margin-bottom: 0.3rem;">Moderate-sized tables with many columns</li>
                                  <li>Components with expensive render logic</li>
                              </ul>
                          </div>
                          
                          <div style="
                              background: var(--light);
                              padding: 1.5rem;
                              border-radius: var(--border-radius);
                              border-left: 4px solid var(--tertiary);
                          ">
                              <h4 style="
                                  color: var(--tertiary-dark);
                                  margin-top: 0;
                                  margin-bottom: 0.5rem;
                              ">Probably Not Needed</h4>
                              <ul style="margin: 0; padding-left: 1.2rem;">
                                  <li style="margin-bottom: 0.3rem;">Short lists (<50 simple items)</li>
                                  <li style="margin-bottom: 0.3rem;">Static content</li>
                                  <li>Components already optimized</li>
                              </ul>
                          </div>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Virtualization Libraries Comparison</h3>
                      
                      <div style="overflow-x: auto; margin-bottom: 2rem;">
                          <table style="
                              width: 100%;
                              border-collapse: collapse;
                              min-width: 600px;
                          ">
                              <thead>
                                  <tr style="
                                      background: var(--primary-light);
                                      border-bottom: 2px solid var(--primary);
                                  ">
                                      <th style="
                                          padding: 1rem;
                                          text-align: left;
                                      ">Library</th>
                                      <th style="
                                          padding: 1rem;
                                          text-align: left;
                                      ">Size</th>
                                      <th style="
                                          padding: 1rem;
                                          text-align: left;
                                      ">Features</th>
                                      <th style="
                                          padding: 1rem;
                                          text-align: left;
                                      ">Best For</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr style="
                                      border-bottom: 1px solid var(--gray-light);
                                  ">
                                      <td style="
                                          padding: 1rem;
                                      "><strong>react-window</strong></td>
                                      <td style="
                                          padding: 1rem;
                                      ">6.5kB</td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Fixed/variable sizes, horizontal/vertical, basic customization
                                      </td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Most list virtualization needs, balance of features and size
                                      </td>
                                  </tr>
                                  <tr style="
                                      border-bottom: 1px solid var(--gray-light);
                                  ">
                                      <td style="
                                          padding: 1rem;
                                      "><strong>react-virtualized</strong></td>
                                      <td style="
                                          padding: 1rem;
                                      ">22kB</td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Grids, masonry, cell measurer, auto-sizer, full customization
                                      </td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Complex data grids, multi-dimensional virtualization
                                      </td>
                                  </tr>
                                  <tr style="
                                      border-bottom: 1px solid var(--gray-light);
                                  ">
                                      <td style="
                                          padding: 1rem;
                                      "><strong>@tanstack/react-virtual</strong></td>
                                      <td style="
                                          padding: 1rem;
                                      ">4kB</td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Headless, dynamic sizes, infinite scroll, windowing
                                      </td>
                                      <td style="
                                          padding: 1rem;
                                      ">
                                          Custom virtualization needs, minimal overhead
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      
                      <h3 style="
                          color: var(--dark);
                          font-size: 1.4rem;
                          margin: 2.5rem 0 1rem;
                      ">Advanced Virtualization Patterns</h3>
                      
                      <div style="
                          background: var(--light);
                          padding: 2rem;
                          border-radius: var(--border-radius);
                          margin-bottom: 2rem;
                      ">
                          <h4 style="
                              color: var(--primary-dark);
                              margin-top: 0;
                              margin-bottom: 1.5rem;
                          ">Dynamic Height Virtualization</h4>
                          
                          <div style="display: flex; gap: 2rem;">
                              <div style="flex: 1;">
                                  <p style="margin-bottom: 1rem;">
                                      Handling variable height items requires measuring elements before rendering. 
                                      The <code>CellMeasurer</code> pattern solves this by:
                                  </p>
                                  <ol style="margin-bottom: 1rem; padding-left: 1.5rem;">
                                      <li style="margin-bottom: 0.5rem;">Rendering a measurement pass</li>
                                      <li style="margin-bottom: 0.5rem;">Caching item dimensions</li>
                                      <li style="margin-bottom: 0.5rem;">Using cached sizes for layout</li>
                                      <li>Invalidating cache when data changes</li>
                                  </ol>
                                  <div style="
                                      background: var(--light-secondary);
                                      padding: 1rem;
                                      border-radius: calc(var(--border-radius) - 2px);
                                  ">
                                      <p style="margin-bottom: 0; font-size: 0.9rem;">
                                          <strong>Pro Tip:</strong> For maximum performance, provide estimated row 
                                          heights to avoid layout thrashing during measurement.
                                      </p>
                                  </div>
                              </div>
                              <div style="flex: 1;">
                                  <pre style="
                                      background: var(--dark-tertiary);
                                      padding: 1rem;
                                      border-radius: calc(var(--border-radius) - 2px);
                                      overflow-x: auto;
                                      color: var(--light);
                                      font-size: 0.9rem;
                                  "><code>import { VariableSizeList } from 'react-window';
import { ResizeObserver } from '@juggle/resize-observer';

const rowHeights = new Array(1000)
.fill(true)
.map(() => 25 + Math.round(Math.random() * 50));

const Row = ({ index, style }) => (
&lt;div style={style}&gt;
  Row {index} (height: {rowHeights[index]}px)
&lt;/div&gt;
);

const App = () => (
&lt;VariableSizeList
  height={500}
  itemCount={1000}
  itemSize={index => rowHeights[index]}
  width={600}
  itemData={data}
&gt;
  {Row}
&lt;/VariableSizeList&gt;
);</code></pre>
                              </div>
                          </div>
                      </div>
                      
                      <div style="
                          background: var(--light);
                          padding: 2rem;
                          border-radius: var(--border-radius);
                          margin-bottom: 2rem;
                      ">
                          <h4 style="
                              color: var(--primary-dark);
                              margin-top: 0;
                              margin-bottom: 1.5rem;
                          ">Infinite Loading with Virtualization</h4>
                          
                          <div style="display: flex; gap: 2rem;">
                              <div style="flex: 1;">
                                  <p style="margin-bottom: 1rem;">
                                      Combining virtualization with infinite loading creates a seamless experience 
                                      for large datasets that can't fit in memory all at once.
                                  </p>
                                  <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
                                      <li style="margin-bottom: 0.5rem;">Track loaded ranges</li>
                                      <li style="margin-bottom: 0.5rem;">Prefetch adjacent items</li>
                                      <li style="margin-bottom: 0.5rem;">Implement scroll position restoration</li>
                                      <li>Cache loaded data</li>
                                  </ul>
                                  <img src="/portfolio/blogs images/Screenshot 2025-04-24 180603.png" alt="Infinite loading diagram" 
                                  style="width: 100%; border-radius: calc(var(--border-radius) - 2px);">
                                   <img src="/portfolio/blogs images/Advanced React Performance Optimization Techniques - visual selection (2).png" alt="Infinite loading diagram" 
                                  style="width: 100%; border-radius: calc(var(--border-radius) - 2px);">
                              </div>
                              <div style="flex: 1;">
                                  <pre style="
                                      background: var(--dark-tertiary);
                                      padding: 1rem;
                                      border-radius: calc(var(--border-radius) - 2px);
                                      overflow-x: auto;
                                      color: var(--light);
                                      font-size: 0.9rem;
                                  "><code>function InfiniteList() {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);

const loadMore = useCallback(() => {
  if (loading || !hasMore) return;
  
  setLoading(true);
  fetchNextPage().then(newItems => {
    setItems(prev => [...prev, ...newItems]);
    setHasMore(newItems.length > 0);
    setLoading(false);
  });
}, [loading, hasMore]);

const isItemLoaded = index => index < items.length;

const Item = ({ index, style }) => {
  if (!isItemLoaded(index)) {
    return &lt;div style={style}&gt;Loading...&lt;/div&gt;;
  }
  
  return (
    &lt;div style={style}&gt;
      Item {index}: {items[index]}
    &lt;/div&gt;
  );
};

return (
  &lt;InfiniteLoader
    isItemLoaded={isItemLoaded}
    itemCount={hasMore ? items.length + 1 : items.length}
    loadMoreItems={loadMore}
  &gt;
    {({ onItemsRendered, ref }) => (
      &lt;FixedSizeList
        height={500}
        itemCount={hasMore ? items.length + 1 : items.length}
        itemSize={50}
        width={600}
        onItemsRendered={onItemsRendered}
        ref={ref}
      &gt;
        {Item}
      &lt;/FixedSizeList&gt;
    )}
  &lt;/InfiniteLoader&gt;
);
}</code></pre>
                              </div>
                          </div>
                      </div>
                  </section>


                 <!-- Section 4: Profiling and Measuring Performance -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">4.</span> Profiling and Measuring Performance
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">The Measurement Mindset</h3>
                <p style="margin-bottom: 1rem;">
                    Performance optimization without measurement is like navigation without a compass. 
                    Effective React optimization requires:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Baseline metrics</strong> - Know your starting point</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Precise instrumentation</strong> - Measure the right things</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Statistical significance</strong> - Avoid false positives</li>
                    <li><strong>Continuous monitoring</strong> - Prevent regression</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Golden Rule:</strong> Always measure before and after optimizations. 
                        Many "optimizations" actually make performance worse in real-world scenarios.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 175703.png" alt="React performance measurement tools" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">React Profiler Deep Dive</h3>
        
        <div style="
            background: var(--light);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        ">
            <h4 style="
                color: var(--primary-dark);
                margin-top: 0;
                margin-bottom: 1rem;
            ">Using React DevTools Profiler</h4>
            
            <div style="display: flex; gap: 2rem;">
                <div style="flex: 1;">
                    <p style="margin-bottom: 1rem;">
                        The React Profiler provides component-level timing metrics through flamegraphs:
                    </p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.5rem;">
                        <li style="margin-bottom: 0.5rem;">Record a profiling session</li>
                        <li style="margin-bottom: 0.5rem;">Analyze the flamegraph</li>
                        <li style="margin-bottom: 0.5rem;">Identify expensive re-renders</li>
                        <li>Drill into component details</li>
                    </ol>
                    <p style="margin-bottom: 0;">
                        Key metrics: Render duration, commit phase timing, and re-render frequency.
                    </p>
                </div>
                <div style="flex: 1;">
                    <img src="/portfolio/blogs images/Advanced React Performance Optimization Techniques - visual selection (1).png" alt="React Profiler screenshot" 
                    style="width: 100%; border-radius: calc(var(--border-radius) - 2px);">
                </div>
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Performance Measurement Tools</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">performance.now()</h4>
                <p style="margin-bottom: 1rem;">
                    High-resolution timing for custom measurements:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>const start = performance.now();
// Execute code to measure
const end = performance.now();
console.log(\`Execution time: \${end - start}ms\`);</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">React.memo + Profiling</h4>
                <p style="margin-bottom: 1rem;">
                    Identify unnecessary re-renders:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
});

// In Profiler, check if parent re-renders cause unnecessary updates</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Web Vitals</h4>
                <p style="margin-bottom: 1rem;">
                    Core user-centric metrics:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log); 
getLCP(console.log);</code></pre>
            </div>
        </div>
        
        <div style="
            background: var(--secondary-light);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        ">
            <h4 style="
                color: var(--secondary-dark);
                margin-top: 0;
                margin-bottom: 1rem;
            ">Diagnosing Performance Bottlenecks</h4>
            
            <div style="display: flex; gap: 2rem;">
                <div style="flex: 1;">
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Symptom: Slow Initial Load</h5>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;">Check bundle size with source-map-explorer</li>
                        <li style="margin-bottom: 0.3rem;">Analyze network waterfall</li>
                        <li>Verify code splitting</li>
                    </ul>
                </div>
                <div style="flex: 1;">
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Symptom: Janky Interactions</h5>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;">Profile with React.memo checks</li>
                        <li style="margin-bottom: 0.3rem;">Identify large component trees</li>
                        <li>Check for synchronous state updates</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 5: Code-Splitting and Lazy Loading -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">5.</span> Code-Splitting and Lazy Loading
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">The Bundle Size Problem</h3>
                <p style="margin-bottom: 1rem;">
                    As React apps grow, JavaScript bundle sizes can balloon to several MBs, causing:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Slow initial page loads</li>
                    <li style="margin-bottom: 0.5rem;">High memory usage</li>
                    <li style="margin-bottom: 0.5rem;">Poor Time-to-Interactive (TTI)</li>
                    <li>Reduced caching efficiency</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Case Study:</strong> Splitting a 2.4MB bundle into logical chunks reduced 
                        initial load time by 58% and improved Lighthouse score from 42 to 89.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Advanced React Performance Optimization Techniques - visual selection.png" alt="Bundle size analysis chart" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">React.lazy and Suspense</h3>
        
        <div style="
            background: var(--light);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        ">
            <h4 style="
                color: var(--primary-dark);
                margin-top: 0;
                margin-bottom: 1rem;
            ">Basic Implementation</h4>
            
            <div style="display: flex; gap: 2rem;">
                <div style="flex: 1;">
                    <p style="margin-bottom: 1rem;">
                        React.lazy enables component-level code splitting with Suspense fallbacks:
                    </p>
                    <pre style="
                        background: var(--dark-tertiary);
                        padding: 1rem;
                        border-radius: calc(var(--border-radius) - 2px);
                        overflow-x: auto;
                        color: var(--light);
                        font-size: 0.9rem;
                    "><code>const ProductDetails = React.lazy(() => 
  import('./ProductDetails')
);

function App() {
  return (
    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
      &lt;ProductDetails /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
                </div>
                <div style="flex: 1;">
                    <p style="margin-bottom: 1rem;">
                        Best practices for Suspense:
                    </p>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Always provide meaningful fallbacks</li>
                        <li style="margin-bottom: 0.5rem;">Keep fallback dimensions stable</li>
                        <li style="margin-bottom: 0.5rem;">Avoid layout shifts</li>
                        <li>Consider skeleton screens</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Route-Based Splitting</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">React Router v6</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    &lt;Routes&gt;
      &lt;Route path="/" element={
        &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
          &lt;Home /&gt;
        &lt;/Suspense&gt;
      } /&gt;
      &lt;Route path="/about" element={
        &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
          &lt;About /&gt;
        &lt;/Suspense&gt;
      } /&gt;
    &lt;/Routes&gt;
  );
}</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Prefetching Strategy</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Prefetch on hover or visibility
const ProductDetails = lazy(() => import(
  /* webpackPrefetch: true */ './ProductDetails'
));

// Or manually trigger prefetch
function prefetchComponent() {
  import('./ProductDetails');
}

// Call on hover or other user intent
&lt;Link 
  to="/product" 
  onMouseEnter={prefetchComponent}
&gt;
  Product
&lt;/Link&gt;</code></pre>
            </div>
        </div>
    </section>

    <!-- Section 6: Fine-Grained Re-render Control -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">6.</span> Fine-Grained Re-render Control
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">The Re-render Problem</h3>
                <p style="margin-bottom: 1rem;">
                    React's declarative model can lead to unnecessary re-renders when:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Parent components re-render</li>
                    <li style="margin-bottom: 0.5rem;">Context values change</li>
                    <li style="margin-bottom: 0.5rem;">Props are unstable references</li>
                    <li>State management triggers updates</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Performance Impact:</strong> Unnecessary re-renders can waste 30-50% of 
                        rendering resources in complex applications.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 173029.png" alt="React component render flow" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Optimization Techniques</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">React.memo</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>const ExpensiveComponent = React.memo(
  ({ data }) => {
    return &lt;div&gt;{data}&lt;/div&gt;;
  },
  (prevProps, nextProps) => {
    // Custom comparison
    return prevProps.data === nextProps.data;
  }
);</code></pre>
                <p style="margin-top: 1rem; margin-bottom: 0;">
                    <strong>When to use:</strong> Pure components with stable props
                </p>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">useMemo/useCallback</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>function Parent() {
  const [count, setCount] = useState(0);
  
  // Memoize expensive calculation
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  
  // Memoize callback
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return (
    &lt;Child onClick={handleClick} value={computedValue} /&gt;
  );
}</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">useRef/useImperativeHandle</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Avoid re-renders for non-state values
function Timer() {
  const intervalRef = useRef();
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Update without re-render
    }, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);
}

// Expose imperative methods
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  
  return &lt;input ref={inputRef} /&gt;;
});</code></pre>
            </div>
        </div>
    </section>

    <!-- Section 7: Context API Optimization -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">7.</span> Context API Optimization
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">Context Performance Challenges</h3>
                <p style="margin-bottom: 1rem;">
                    While Context is great for state management, it can cause performance issues:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">All consumers re-render on any value change</li>
                    <li style="margin-bottom: 0.5rem;">Frequent updates trigger cascading re-renders</li>
                    <li style="margin-bottom: 0.5rem;">Large context values increase memory pressure</li>
                    <li>Nested providers compound these issues</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Diagnosis Tip:</strong> Use React Profiler to identify unnecessary 
                        context-triggered re-renders.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 123016.png" alt="Context re-render flow" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Optimization Strategies</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Splitting Contexts</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Instead of one big context:
const UserContext = createContext();
const SettingsContext = createContext();

function App() {
  return (
    &lt;UserContext.Provider value={userData}&gt;
      &lt;SettingsContext.Provider value={settings}&gt;
        &lt;AppLayout /&gt;
      &lt;/SettingsContext.Provider&gt;
    &lt;/UserContext.Provider&gt;
  );
}</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Context Selectors</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Using useContextSelector
import { useContextSelector } from 'use-context-selector';

function UserName() {
  const name = useContextSelector(
    UserContext,
    (user) => user.name
  );
  
  return &lt;div&gt;{name}&lt;/div&gt;;
}

// Only re-renders when user.name changes</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Memoized Providers</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>function AppProvider({ children }) {
  const [state, setState] = useState(initialState);
  
  // Memoize context value
  const contextValue = useMemo(() => ({
    state,
    dispatch: (action) => {
      setState(reducer(state, action));
    }
  }), [state]);
  
  return (
    &lt;AppContext.Provider value={contextValue}&gt;
      {children}
    &lt;/AppContext.Provider&gt;
  );
}</code></pre>
            </div>
        </div>
    </section>

    <!-- Section 8: TypeScript Performance Tips -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">8.</span> TypeScript Performance Tips
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">TypeScript Impact on Performance</h3>
                <p style="margin-bottom: 1rem;">
                    While TypeScript itself doesn't affect runtime performance, type design impacts:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;">Build times and developer experience</li>
                    <li style="margin-bottom: 0.5rem;">Bundle size (with certain configurations)</li>
                    <li style="margin-bottom: 0.5rem;">Code organization and maintainability</li>
                    <li>Runtime type checking overhead</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Note:</strong> TypeScript types are erased during compilation and 
                        don't affect runtime performance directly.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 123043.png" alt="TypeScript compilation process" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Optimization Techniques</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Discriminated Unions</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: string[];
};

type ErrorState = {
  status: 'error';
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;

function Component({ state }: { state: State }) {
  switch (state.status) {
    case 'loading':
      return &lt;Loader /&gt;;
    case 'success':
      return &lt;DataView data={state.data} /&gt;;
    case 'error':
      return &lt;ErrorDisplay error={state.error} /&gt;;
  }
}</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Type-Only Imports</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Reduces runtime imports
import type { User } from './types';

// For React components
import type { FC } from 'react';
interface Props { /* ... */ }
const Component: FC&lt;Props&gt; = () => { /* ... */ };</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Efficient Generics</h4>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// Avoid complex nested generics
type SimpleList&lt;T&gt; = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

// Use default types when possible
type PaginationOptions = {
  page?: number;
  size?: number;
};

// Prefer interfaces for object shapes
interface User {
  id: string;
  name: string;
}</code></pre>
            </div>
        </div>
    </section>
    <!-- Section 9: Anti-Patterns and Common Traps -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">9.</span> Anti-Patterns and Common Traps
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">Performance Pitfalls</h3>
                <p style="margin-bottom: 1rem;">
                    Many common React patterns actually hurt performance when misused:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Premature optimization:</strong> Adding React.memo everywhere without measuring first</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Context overuse:</strong> Putting everything in a single context provider</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Effect chains:</strong> Cascading useEffect calls that trigger re-renders</li>
                    <li><strong>Prop drilling:</strong> Passing callbacks deep through component trees</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Case Study:</strong> Removing unnecessary React.memo wrappers actually improved performance by 15% in 
                        a large dashboard app by reducing memoization overhead.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 123103.png" alt="Common React anti-patterns" 
                style="width: 100%; height:500px; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Common Anti-Patterns</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">1. Over-Memoization</h4>
                <p style="margin-bottom: 1rem;">
                    Wrapping every component in React.memo without proper prop analysis:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// ❌ Don't do this everywhere
const Button = React.memo(({ children }) => (
  &lt;button&gt;{children}&lt;/button&gt;
));

// ✅ Only memoize when:
// - Component re-renders with same props
// - Re-renders are expensive
// - You've measured the impact</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">2. Giant Context</h4>
                <p style="margin-bottom: 1rem;">
                    Putting all application state in a single context:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// ❌ Avoid mega-context
const AppContext = createContext();

function App() {
  const [state, setState] = useState({
    user: {},
    settings: {},
    theme: {},
    // 20+ other values...
  });
  
  return (
    &lt;AppContext.Provider value={{ state, setState }}&gt;
      &lt;AppLayout /&gt;
    &lt;/AppContext.Provider&gt;
  );
}

// ✅ Split into logical contexts
const UserContext = createContext();
const SettingsContext = createContext();</code></pre>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">3. Effect Chains</h4>
                <p style="margin-bottom: 1rem;">
                    Cascading effects that trigger re-renders:
                </p>
                <pre style="
                    background: var(--dark-tertiary);
                    padding: 1rem;
                    border-radius: calc(var(--border-radius) - 2px);
                    overflow-x: auto;
                    color: var(--light);
                    font-size: 0.9rem;
                "><code>// ❌ Avoid effect chains
function Component() {
  const [data, setData] = useState();
  const [processed, setProcessed] = useState();
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  useEffect(() => {
    if (data) {
      setProcessed(process(data));
    }
  }, [data]); // Triggers extra render
  
  // ✅ Combine into single effect
  useEffect(() => {
    fetchData().then(data => {
      setProcessed(process(data));
    });
  }, []);
}</code></pre>
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Optimization Traps</h3>
        
        <div style="
            background: var(--secondary-light);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        ">
            <h4 style="
                color: var(--secondary-dark);
                margin-top: 0;
                margin-bottom: 1rem;
            ">Things That Look Optimized But Aren't</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div>
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Inline Function Props</h5>
                    <pre style="
                        background: var(--dark-tertiary);
                        padding: 1rem;
                        border-radius: calc(var(--border-radius) - 2px);
                        overflow-x: auto;
                        color: var(--light);
                        font-size: 0.9rem;
                        margin-bottom: 1rem;
                    "><code>// ❌ Looks clean but creates new function each render
&lt;Button onClick={() => handleClick(id)} /&gt;

// ✅ Memoize handler when needed
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);</code></pre>
                </div>
                
                <div>
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Spread Props</h5>
                    <pre style="
                        background: var(--dark-tertiary);
                        padding: 1rem;
                        border-radius: calc(var(--border-radius) - 2px);
                        overflow-x: auto;
                        color: var(--light);
                        font-size: 0.9rem;
                    "><code>// ❌ Spread props break memoization
&lt;Component {...props} /&gt;

// ✅ Be explicit with needed props
&lt;Component 
  title={props.title}
  active={props.active}
/&gt;</code></pre>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 10: Conclusion and Resources -->
    <section style="margin-bottom: 4rem;">
        <h2 style="
            color: var(--dark);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--primary);
        ">
            <span style="color: var(--primary);">10.</span> Conclusion and Resources
        </h2>
        
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <div style="flex: 1;">
                <h3 style="
                    color: var(--dark);
                    font-size: 1.4rem;
                    margin: 0 0 1rem;
                ">Key Takeaways</h3>
                <p style="margin-bottom: 1rem;">
                    After exploring all these optimization techniques, remember:
                </p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Measure first:</strong> Never optimize without profiling</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Focus on bottlenecks:</strong> 80% of gains come from 20% of fixes</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Balance tradeoffs:</strong> Optimization often increases complexity</li>
                    <li><strong>Test changes:</strong> Verify improvements with metrics</li>
                </ul>
                <div style="
                    background: var(--light);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                ">
                    <p style="margin-bottom: 0;">
                        <strong>Remember:</strong> The fastest code is code that doesn't run. 
                        Often the best optimization is removing unnecessary work entirely.
                    </p>
                </div>
            </div>
            <div style="flex: 1;">
                <img src="/portfolio/blogs images/Screenshot 2025-04-24 123126.png" alt="Optimization priority pyramid" 
                style="width: 100%; border-radius: var(--border-radius);">
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Optimization Checklist</h3>
        
        <div style="
            background: var(--primary-light);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin-bottom: 2rem;
        ">
            <h4 style="
                color: var(--primary-dark);
                margin-top: 0;
                margin-bottom: 1rem;
            ">React Performance Audit</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Rendering</h5>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;">Identify unnecessary re-renders</li>
                        <li style="margin-bottom: 0.3rem;">Apply React.memo where beneficial</li>
                        <li style="margin-bottom: 0.3rem;">Memoize expensive calculations</li>
                        <li>Use concurrent rendering features</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Loading</h5>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;">Implement code splitting</li>
                        <li style="margin-bottom: 0.3rem;">Lazy load non-critical components</li>
                        <li style="margin-bottom: 0.3rem;">Optimize bundle size</li>
                        <li>Prefetch likely routes</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style="color: var(--dark); margin-bottom: 0.5rem;">Data</h5>
                    <ul style="margin: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.3rem;">Virtualize large lists</li>
                        <li style="margin-bottom: 0.3rem;">Optimize context providers</li>
                        <li style="margin-bottom: 0.3rem;">Batch state updates</li>
                        <li>Use transitions for non-urgent updates</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h3 style="
            color: var(--dark);
            font-size: 1.4rem;
            margin: 2.5rem 0 1rem;
        ">Further Resources</h3>
        
        <div style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        ">
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Official Documentation</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li style="margin-bottom: 0.5rem;">React Docs: Optimizing Performance</li>
                    <li style="margin-bottom: 0.5rem;">React Profiler API Reference</li>
                    <li style="margin-bottom: 0.5rem;">Concurrent Mode Documentation</li>
                    <li>React Fiber Architecture</li>
                </ul>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Tools</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li style="margin-bottom: 0.5rem;">React DevTools Profiler</li>
                    <li style="margin-bottom: 0.5rem;">Chrome Performance Tab</li>
                    <li style="margin-bottom: 0.5rem;">Webpack Bundle Analyzer</li>
                    <li>Lighthouse CI</li>
                </ul>
            </div>
            
            <div style="
                background: var(--light);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow-sm);
            ">
                <h4 style="
                    color: var(--primary-dark);
                    margin-top: 0;
                    margin-bottom: 1rem;
                ">Community Resources</h4>
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li style="margin-bottom: 0.5rem;">Reactiflux Discord</li>
                    <li style="margin-bottom: 0.5rem;">React GitHub Issues</li>
                    <li style="margin-bottom: 0.5rem;">Performance Case Studies</li>
                    <li>React Conference Talks</li>
                </ul>
            </div>
        </div>
        
        <div style="
            background: var(--primary);
            padding: 2rem;
            border-radius: var(--border-radius);
            color: white;
            text-align: center;
        ">
            <h3 style="
                margin-top: 0;
                margin-bottom: 1rem;
                font-size: 1.5rem;
            ">Ready to Optimize Your React App?</h3>
            <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                Start with one optimization at a time, measure the impact, and iterate.
            </p>
        </div>
    </section>
                        <div style="text-align: center;">
                            <button id="close-overlay-bottom" style="
                               display: flex;
                               align-items: center;
                               gap: 0.5rem;
                               background: linear-gradient(135deg, var(--primary), var(--secondary));
                               color: var(--light);
                               padding: 0.7rem 1.5rem;
                               border-radius: 5px;
                               text-decoration: none;
                               font-weight: 600;
                               transition: var(--transition);
                              border: none;
                            ">Close Article</button>
                        </div>
`;

      overlay.appendChild(container);
      document.body.appendChild(overlay);

      // Enhanced close functionality
      const closeOverlay = () => {
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.3s ease";
        setTimeout(() => overlay.remove(), 300);
      };

      // Close button handlers
      document
        .getElementById("close-overlay")
        .addEventListener("click", closeOverlay);
      document
        .getElementById("close-overlay-bottom")
        .addEventListener("click", closeOverlay);

      // Close when clicking outside content
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeOverlay();
        }
      });

      // Escape key to close
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeOverlay();
        }
      });

      // Prevent scrolling when overlay is open
      document.body.style.overflow = "hidden";
      overlay.addEventListener("scroll", (e) => {
        if (e.target === overlay) {
          container.scrollTop = overlay.scrollTop;
        }
      });

      // Restore scroll when closed
      const restoreScroll = () => {
        document.body.style.overflow = "";
      };

      document
        .getElementById("close-overlay")
        .addEventListener("click", restoreScroll);
      document
        .getElementById("close-overlay-bottom")
        .addEventListener("click", restoreScroll);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          restoreScroll();
        }
      });
    });
  }
});
