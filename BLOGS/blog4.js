// blog3.js - The CSS Grid Revolution
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButton = document.getElementById("blog4");
  
    if (readMoreButton) {
      readMoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Create overlay container
        const overlay = document.createElement("div");
        overlay.className = "blog-overlay";
        
        // Create content container
        const container = document.createElement("div");
        container.className = "blog-container";
        
        // Add CSS styles (same as previous)
        const style = document.createElement("style");
        style.textContent = `
          .blog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
            overflow-y: auto;
            padding: 2rem;
            box-sizing: border-box;
          }
          
          .blog-container {
            background: #f8f9fa;
            padding: 3rem;
            width: 85%;
            max-width: 1200px;
            max-height: 90vh;
            overflow-y: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            font-family: 'Inter', sans-serif;
            color: #333;
            line-height: 1.7;
            position: relative;
          }

             .blog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
          overflow-y: auto;
          padding: 2rem;
          box-sizing: border-box;
        }
        
        .blog-container {
          background: #f8f9fa;
          padding: 3rem;
          width: 85%;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.7;
          position: relative;
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          transition: transform 0.2s;
        }
        
        .close-btn:hover {
          transform: scale(1.2);
        }
        
        .close-bottom {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #3498db, #2ecc71);
          color: white;
          padding: 0.7rem 1.5rem;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          margin: 2rem auto 0;
          cursor: pointer;
        }
        
        .close-bottom:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .blog-title {
          color: #2c3e50;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.3;
        }
        
        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }
        
        .blog-subtitle {
          color: #7f8c8d;
          max-width: 700px;
          margin: 0 auto;
          font-size: 1.1rem;
        }
        
        .blog-section {
          margin-bottom: 3rem;
        }
        
        .section-title {
          color: #2c3e50;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #3498db;
        }
        
        .tech-demo {
          background: #ecf0f1;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 2rem 0;
          border: 1px solid #bdc3c7;
        }
        
        .tech-title {
          color: #2c3e50;
          margin-top: 0;
          font-size: 1.4rem;
        }
        
        pre {
          background: #2c3e50;
          color: #ecf0f1;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .case-study {
          background: #e8f4fc;
          border-left: 4px solid #3498db;
          padding: 1.5rem;
          border-radius: 0 8px 8px 0;
          margin: 2rem 0;
        }
        
        .case-title {
          color: #3498db;
          margin-top: 0;
        }
        
        .tool-comparison {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .tool-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .tool-card h4 {
          margin-top: 0;
          color: #2c3e50;
        }
        
        .cta-box {
          background: #3498db;
          color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          margin: 3rem 0;
        }
        
        .cta-title {
          color: white;
          margin-top: 0;
        }
        
        .cta-button {
          display: inline-block;
          background: white;
          color: #3498db;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
          
          /* [Previous CSS classes remain the same] */
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
          }
          .comparison-table th {
            background: #3498db;
            color: white;
            padding: 12px;
            text-align: left;
          }
          .comparison-table td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }
          .comparison-table tr:nth-child(even) {
            background: #f2f2f2;
          }
          .feature-list {
            columns: 2;
            column-gap: 2rem;
          }
          @media (max-width: 768px) {
            .feature-list {
              columns: 1;
            }
          }
          
          /* Additional Grid-specific styles */
          .grid-demo {
            display: grid;
            gap: 1rem;
            padding: 1rem;
            background: #e9ecef;
            border-radius: 8px;
            margin: 1rem 0;
          }
          .grid-item {
            background: #228be6;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
          }
          .code-comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          @media (max-width: 768px) {
            .code-comparison {
              grid-template-columns: 1fr;
            }
          }
        `;
  
        // Add content to container - 12 Grid Topics
        container.innerHTML = `
          <button class="close-btn" id="close-overlay">×</button>
  
          <header class="blog-header">
            <h1 class="blog-title">The CSS Grid Revolution: 12 Game-Changing Techniques</h1>
            <div class="title-underline"></div>
            <p class="blog-subtitle">Master modern layout techniques with practical examples and real-world applications</p>
          </header>
  
          <!-- ========== TOPIC 1 ========== -->
          <div class="blog-section">
            <h2 class="section-title">1. The Grid Fundamentals</h2>
            <p>CSS Grid introduces a two-dimensional layout system that revolutionizes how we structure web content.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Basic Grid Example</h3>
              <pre><code>/* Container becomes grid parent */
  .container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 16px;
    min-height: 100vh;
  }</code></pre>
              <div class="grid-demo" style="grid-template-columns: 200px 1fr 200px; grid-template-rows: auto 1fr auto; min-height: 300px;">
                <div class="grid-item" style="grid-column: 1 / 4;">Header</div>
                <div class="grid-item">Sidebar</div>
                <div class="grid-item">Main Content</div>
                <div class="grid-item">Right Panel</div>
                <div class="grid-item" style="grid-column: 1 / 4;">Footer</div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Washington Post Redesign</h4>
              <p>Their 2018 redesign using CSS Grid resulted in:</p>
              <table class="comparison-table">
                <tr><th>Metric</th><th>Improvement</th></tr>
                <tr><td>Layout code reduction</td><td>75% less code</td></tr>
                <tr><td>Mobile performance</td><td>40% faster</td></tr>
                <tr><td>Ad viewability</td><td>25% increase</td></tr>
              </table>
            </div>
          </div>
  
          <!-- ========== TOPIC 2 ========== -->
          <div class="blog-section">
            <h2 class="section-title">2. Responsive Grids with fr Units</h2>
            <p>The fractional (fr) unit creates flexible columns that adapt to available space.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Fluid Layout Example</h3>
              <pre><code>.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }</code></pre>
              <div class="grid-demo" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
              </div>
              <p>Resize your browser to see the responsive behavior</p>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Airbnb's Image Gallery</h4>
              <p>Their implementation features:</p>
              <ul>
                <li>Perfectly aligned images regardless of aspect ratio</li>
                <li>Seamless transitions between breakpoints</li>
                <li>30% less JavaScript for layout management</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 3 ========== -->
          <div class="blog-section">
            <h2 class="section-title">3. Named Grid Areas</h2>
            <p>Visual template syntax makes complex layouts intuitive to create and maintain.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Semantic Layout Example</h3>
              <pre><code>.app {
    display: grid;
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
  }
  
  header { grid-area: header; }
  nav { grid-area: nav; }
  main { grid-area: main; }
  aside { grid-area: aside; }
  footer { grid-area: footer; }</code></pre>
              <div class="grid-demo" style="grid-template-areas: 
                '"header header header" "nav main aside" "footer footer footer"';
                grid-template-columns: 200px 1fr 200px;">
                <div class="grid-item" style="grid-area: header;">Header</div>
                <div class="grid-item" style="grid-area: nav;">Nav</div>
                <div class="grid-item" style="grid-area: main;">Main</div>
                <div class="grid-item" style="grid-area: aside;">Aside</div>
                <div class="grid-item" style="grid-area: footer;">Footer</div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Microsoft's Documentation</h4>
              <p>Their docs use named areas to:</p>
              <ul>
                <li>Simplify RTL language support</li>
                <li>Enable layout variations with one CSS change</li>
                <li>Improve team collaboration</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 4 ========== -->
          <div class="blog-section">
            <h2 class="section-title">4. Grid vs Flexbox: When to Use Each</h2>
            <p>Understanding the strengths of each layout model is crucial for modern CSS.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Comparison Table</h3>
              <table class="comparison-table">
                <tr><th>Scenario</th><th>Best Choice</th><th>Reason</th></tr>
                <tr><td>One-dimensional layouts</td><td>Flexbox</td><td>Simpler syntax for linear items</td></tr>
                <tr><td>Complex two-dimensional layouts</td><td>Grid</td><td>Precise row/column control</td></tr>
                <tr><td>Micro layouts within components</td><td>Flexbox</td><td>Better content-based sizing</td></tr>
                <tr><td>Overall page structure</td><td>Grid</td><td>Template-based organization</td></tr>
              </table>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Spotify's Hybrid Approach</h4>
              <p>Their web player combines:</p>
              <ul>
                <li>Grid for main app structure</li>
                <li>Flexbox for playlist items</li>
                <li>Resulting in 60% less layout bugs</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 5 ========== -->
          <div class="blog-section">
            <h2 class="section-title">5. Advanced Alignment Techniques</h2>
            <p>Grid provides powerful alignment controls surpassing traditional methods.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Placement Properties</h3>
              <div class="code-comparison">
                <div>
                  <h4>Old Method (Flexbox)</h4>
                  <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .item {
    margin: auto;
  }</code></pre>
                </div>
                <div>
                  <h4>Grid Method</h4>
                  <pre><code>.container {
    display: grid;
    place-items: center;
  }
  
  /* Or precise control */
  .item {
    align-self: end;
    justify-self: start;
  }</code></pre>
                </div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">GitHub's New UI</h4>
              <p>Their alignment improvements:</p>
              <ul>
                <li>Reduced alignment-related CSS by 80%</li>
                <li>Eliminated all "magic number" positioning</li>
                <li>Improved vertical rhythm consistency</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 6 ========== -->
          <div class="blog-section">
            <h2 class="section-title">6. The Explicit vs Implicit Grid</h2>
            <p>Understanding grid creation modes unlocks dynamic layouts.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Implicit Grid Example</h3>
              <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-auto-flow: dense;
  }</code></pre>
              <div class="grid-demo" style="grid-template-columns: repeat(2, 1fr); grid-auto-rows: minmax(50px, auto);">
                <div class="grid-item">1</div>
                <div class="grid-item" style="grid-column: span 2;">2 (spans 2 columns)</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Pinterest's Layout Engine</h4>
              <p>Their implementation:</p>
              <ul>
                <li>Handles 1000+ items efficiently</li>
                <li>Automatically fills gaps</li>
                <li>Maintains aspect ratios</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 7 ========== -->
          <div class="blog-section">
            <h2 class="section-title">7. Grid Template Columns Magic</h2>
            <p>Creative column definitions enable sophisticated designs.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Advanced Patterns</h3>
              <pre><code>/* Alternating sidebar layout */
  .container {
    grid-template-columns: 
      [main-start] 1fr 
      [sidebar-start] 250px 
      [main-end sidebar-end];
  }
  
  /* Calendar grid */
  .calendar {
    grid-template-columns: 
      repeat(7, minmax(0, 1fr));
  }
  
  /* RAM (Repeat, Auto, Minmax) */
  .gallery {
    grid-template-columns: 
      repeat(auto-fill, minmax(200px, 1fr));
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">New York Times</h4>
              <p>Their interactive articles use:</p>
              <ul>
                <li>Custom column templates for data visualization</li>
                <li>Grid for responsive typography</li>
                <li>Nested grids for complex components</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 8 ========== -->
          <div class="blog-section">
            <h2 class="section-title">8. Subgrid: The Missing Piece</h2>
            <p>Subgrid allows nested components to align with parent grids.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Subgrid Example</h3>
              <pre><code>.parent {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  
  .child {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 2;
  }</code></pre>
              <div class="grid-demo" style="grid-template-columns: 1fr 2fr;">
                <div class="grid-item" style="grid-column: span 2; display: grid; grid-template-columns: subgrid;">
                  <div class="grid-item" style="background: #15aabf;">Subgrid Child 1</div>
                  <div class="grid-item" style="background: #15aabf;">Subgrid Child 2</div>
                </div>
                <div class="grid-item">Regular Item</div>
                <div class="grid-item">Regular Item</div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Mozilla's Design System</h4>
              <p>Using subgrid they achieved:</p>
              <ul>
                <li>Pixel-perfect nested components</li>
                <li>Eliminated layout "hacks"</li>
                <li>Reduced component CSS by 40%</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 9 ========== -->
          <div class="blog-section">
            <h2 class="section-title">9. Grid in Production: Fallbacks</h2>
            <p>Strategies for supporting older browsers without sacrificing modern features.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Progressive Enhancement</h3>
              <pre><code>/* Fallback first */
  .container > * {
    float: left;
    width: 50%;
  }
  
  /* Modern browsers will override */
  @supports (display: grid) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .container > * {
      width: auto;
      float: none;
    }
  }</code></pre>
              <ul class="feature-list">
                <li>@supports feature detection</li>
                <li>Mobile-first grid implementation</li>
                <li>CSS Grid polyfill for critical layouts</li>
                <li>Selective enhancement strategy</li>
              </ul>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">BBC's World Service</h4>
              <p>Their approach supports:</p>
              <ul>
                <li>Browsers back to IE11</li>
                <li>RTL languages</li>
                <li>Text-only browsing modes</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 10 ========== -->
          <div class="blog-section">
            <h2 class="section-title">10. Animation and Grid</h2>
            <p>Smooth transitions between grid states create engaging experiences.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Animated Grid Example</h3>
              <pre><code>.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transition: grid-template-columns 0.3s ease;
  }
  
  .grid.compact {
    grid-template-columns: repeat(6, 1fr);
  }
  
  /* Animate grid gaps */
  .grid {
    gap: 20px;
    transition: gap 0.3s ease;
  }
  
  .grid.compact {
    gap: 5px;
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Apple's Product Pages</h4>
              <p>Their animations feature:</p>
              <ul>
                <li>Smooth gallery transitions</li>
                <li>Responsive layout morphing</li>
                <li>60fps performance</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 11 ========== -->
          <div class="blog-section">
            <h2 class="section-title">11. Grid for Typography</h2>
            <p>Precise text layout control with grid leads to better readability.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Typographic Grid</h3>
              <pre><code>.article {
    display: grid;
    grid-template-columns: 
      [start] minmax(1em, 1fr) 
      [text] min(65ch, 100%) 
      minmax(1em, 1fr) [end];
  }
  
  .article > * {
    grid-column: text;
  }
  
  /* Full-bleed elements */
  .article > .full-bleed {
    grid-column: start / end;
    width: 100%;
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Medium's Reading Experience</h4>
              <p>Their improvements:</p>
              <ul>
                <li>Optimal line length (45-75 chars)</li>
                <li>Consistent vertical rhythm</li>
                <li>Responsive typography</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 12 ========== -->
          <div class="blog-section">
            <h2 class="section-title">12. Future of Grid: Level 2 Features</h2>
            <p>Upcoming specifications will make Grid even more powerful.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Coming Attractions</h3>
              <ul class="feature-list">
                <li><strong>Masonry layout:</strong> <code>grid-template-rows: masonry;</code></li>
                <li><strong>Grid spanning:</strong> <code>grid-column: span 2 / span 3;</code></li>
                <li><strong>Dynamic track sizes:</strong> <code>grid-template-columns: fit-content(200px) auto;</code></li>
                <li><strong>Container queries:</strong> <code>@container (width > 400px) { ... }</code></li>
              </ul>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Can I Use Adoption Rates</h4>
              <p>Current browser support:</p>
              <ul>
                <li>CSS Grid: 97% global</li>
                <li>Subgrid: 85% and growing</li>
                <li>Masonry: Experimental</li>
              </ul>
            </div>
          </div>
  
          <!-- Conclusion -->
          <div class="cta-box">
            <h3 class="cta-title">Start Using CSS Grid Today</h3>
            <p>These techniques will transform how you approach web layouts. Begin with simple grids and progressively enhance your skills.</p>
          
          </div>
  
          <div style="text-align: center;">
            <button class="close-bottom" id="close-overlay-bottom">
              Close Article
            </button>
          </div>
        `;
  
        overlay.appendChild(style);
        overlay.appendChild(container);
        document.body.appendChild(overlay);
  
        // Enhanced close functionality
        const closeOverlay = () => {
          overlay.style.opacity = "0";
          overlay.style.transition = "opacity 0.3s ease";
          setTimeout(() => overlay.remove(), 300);
        };
  
        // Close button handlers
        document.getElementById("close-overlay").addEventListener("click", closeOverlay);
        document.getElementById("close-overlay-bottom").addEventListener("click", closeOverlay);
  
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
  
        document.getElementById("close-overlay").addEventListener("click", restoreScroll);
        document.getElementById("close-overlay-bottom").addEventListener("click", restoreScroll);
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            restoreScroll();
          }
        });
      });
    }
  });