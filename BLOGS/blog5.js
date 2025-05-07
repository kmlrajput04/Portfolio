// blog3.js - Building High-Performance Backends with Node.js
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButton = document.getElementById("blog5");
  
    if (readMoreButton) {
      readMoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Create overlay container
        const overlay = document.createElement("div");
        overlay.className = "blog-overlay";
        
        // Create content container
        const container = document.createElement("div");
        container.className = "blog-container";
        
        // Add CSS styles (same as previous with additions)
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
          
          /* Performance-specific styles */
          .architecture-diagram {
            width: 100%;
            background: #e9ecef;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
          }
          .benchmark-results {
            background: #f8f9fa;
            border-left: 4px solid #228be6;
            padding: 1rem;
            margin: 1rem 0;
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
  
        // Add content to container - 15 Performance Topics
        container.innerHTML = `
          <button class="close-btn" id="close-overlay">×</button>
  
          <header class="blog-header">
            <h1 class="blog-title">Building High-Performance Backends with Node.js</h1>
            <div class="title-underline"></div>
            <p class="blog-subtitle">Expert strategies for scalable, low-latency server applications with real-world benchmarks</p>
          </header>
  
          <!-- ========== TOPIC 1 ========== -->
          <div class="blog-section">
            <h2 class="section-title">1. Event Loop Optimization</h2>
            <p>The Node.js event loop is the core of its asynchronous architecture. Poor understanding leads to blocked loops and latency spikes.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Event Loop Phases</h3>
              <ol>
                <li><strong>Timers:</strong> setTimeout/setInterval callbacks</li>
                <li><strong>Pending:</strong> System-level operations (TCP errors)</li>
                <li><strong>Idle/Prepare:</strong> Internal use only</li>
                <li><strong>Poll:</strong> Retrieve new I/O events</li>
                <li><strong>Check:</strong> setImmediate callbacks</li>
                <li><strong>Close:</strong> Socket/Handle close callbacks</li>
              </ol>
              
              <h3 class="tech-title">Blocking vs Non-blocking</h3>
              <pre><code>// BLOCKING - Synchronous file read
  const data = fs.readFileSync('/path/to/file');
  processData(data);
  
  // NON-BLOCKING - Asynchronous with callback
  fs.readFile('/path/to/file', (err, data) => {
    if (err) throw err;
    processData(data);
  });
  
  // BEST PRACTICE - Async/Await
  async function loadData() {
    try {
      const data = await fs.promises.readFile('/path/to/file');
      processData(data);
    } catch (err) {
      console.error(err);
    }
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">PayPal's Migration</h4>
              <p>After optimizing their event loop:</p>
              <table class="comparison-table">
                <tr><th>Metric</th><th>Improvement</th></tr>
                <tr><td>Requests/sec</td><td>35% increase</td></tr>
                <tr><td>Latency (p99)</td><td>From 2s → 200ms</td></tr>
                <tr><td>CPU Usage</td><td>40% reduction</td></tr>
              </table>
            </div>
          </div>
  
          <!-- ========== TOPIC 2 ========== -->
          <div class="blog-section">
            <h2 class="section-title">2. Cluster Mode & Worker Threads</h2>
            <p>Leverage multi-core systems effectively with cluster mode and worker threads.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Cluster Implementation</h3>
              <pre><code>const cluster = require('cluster');
  const os = require('os');
  
  if (cluster.isMaster) {
    const cpuCount = os.cpus().length;
    
    // Fork workers
    for (let i = 0; i < cpuCount; i++) {
      cluster.fork();
    }
    
    // Handle worker exits
    cluster.on('exit', (worker) => {
      console.log(\`Worker \${worker.id} died\`);
      cluster.fork();
    });
  } else {
    // Worker process - start your server
    require('./server');
  }</code></pre>
              
              <h3 class="tech-title">Worker Threads for CPU Tasks</h3>
              <pre><code>const { Worker, isMainThread } = require('worker_threads');
  
  if (isMainThread) {
    // Main thread
    const worker = new Worker(__filename, {
      workerData: { /* heavy data */ }
    });
    
    worker.on('message', (result) => {
      // Handle result
    });
  } else {
    // Worker thread
    const { parentPort, workerData } = require('worker_threads');
    
    // CPU-intensive work
    const result = processData(workerData);
    parentPort.postMessage(result);
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Netflix Encoding Service</h4>
              <p>Using worker threads for video processing:</p>
              <ul>
                <li>8x faster than single-threaded</li>
                <li>Zero downtime during deploys</li>
                <li>Linear scaling with cores</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 3 ========== -->
          <div class="blog-section">
            <h2 class="section-title">3. Advanced Caching Strategies</h2>
            <p>Proper caching reduces database load and improves response times.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Multi-Layer Cache Architecture</h3>
              <div class="architecture-diagram">
                <p><strong>Request Flow:</strong> Client → CDN → In-Memory Cache → Database</p>
              </div>
              
              <h3 class="tech-title">Redis Implementation</h3>
              <pre><code>const redis = require('redis');
  const { promisify } = require('util');
  
  const client = redis.createClient({
    host: 'redis-cluster',
    port: 6379
  });
  
  const getAsync = promisify(client.get).bind(client);
  const setexAsync = promisify(client.setex).bind(client);
  
  async function getWithCache(key) {
    // Check cache first
    const cached = await getAsync(key);
    if (cached) return JSON.parse(cached);
    
    // Cache miss - get from DB
    const data = await fetchFromDatabase(key);
    
    // Set cache with 60s TTL
    await setexAsync(key, 60, JSON.stringify(data));
    return data;
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Twitter's Cache Strategy</h4>
              <p>Their timeline service uses:</p>
              <ul>
                <li>Edge caching with 50ms TTL</li>
                <li>Write-through cache pattern</li>
                <li>Cache stampede prevention</li>
                <li>Resulting in 10,000+ RPS per node</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 4 ========== -->
          <div class="blog-section">
            <h2 class="section-title">4. Database Optimization</h2>
            <p>Database bottlenecks are the #1 cause of performance issues.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">PostgreSQL Tuning</h3>
              <pre><code>// Connection pooling
  const { Pool } = require('pg');
  const pool = new Pool({
    max: 20, // Maximum connections
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
  
  // Query optimization
  async function getUsers() {
    // Good: Parameterized query with index
    const res = await pool.query(
      'SELECT * FROM users WHERE active = $1 LIMIT 100',
      [true]
    );
    
    // Bad: N+1 queries
    // const users = await pool.query('SELECT * FROM users');
    // for (const user of users.rows) {
    //   const profile = await pool.query(
    //     'SELECT * FROM profiles WHERE user_id = $1',
    //     [user.id]
    //   );
    // }
    
    return res.rows;
  }</code></pre>
              
              <h3 class="tech-title">MongoDB Best Practices</h3>
              <ul>
                <li>Create compound indexes for common queries</li>
                <li>Use projections to limit returned fields</li>
                <li>Implement read preference for replicas</li>
                <li>Batch operations with bulkWrite()</li>
              </ul>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Uber's Geospatial Queries</h4>
              <p>Optimized MongoDB for real-time location:</p>
              <table class="comparison-table">
                <tr><th>Optimization</th><th>Impact</th></tr>
                <tr><td>2dsphere indexes</td><td>300x faster queries</td></tr>
                <tr><td>Sharding</td><td>Linear write scaling</td></tr>
                <tr><td>In-memory caching</td><td>95% hit rate</td></tr>
              </table>
            </div>
          </div>
  
          <!-- ========== TOPIC 5 ========== -->
          <div class="blog-section">
            <h2 class="section-title">5. Asynchronous Patterns</h2>
            <p>Mastering async flows prevents callback hell and improves throughput.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Promise Pool for Rate Limiting</h3>
              <pre><code>const { PromisePool } = require('@supercharge/promise-pool');
  
  async function processBatch(items) {
    const { results, errors } = await PromisePool
      .for(items)
      .withConcurrency(10) // Max parallel
      .process(async (item) => {
        return transformItem(item);
      });
    
    return { results, errors };
  }</code></pre>
              
              <h3 class="tech-title">Event Emitter Pattern</h3>
              <pre><code>const EventEmitter = require('events');
  class OrderProcessor extends EventEmitter {
    process(order) {
      this.emit('processing', order);
      
      try {
        // Process order
        this.emit('success', order);
      } catch (err) {
        this.emit('error', err);
      }
    }
  }
  
  // Usage
  const processor = new OrderProcessor();
  processor.on('success', (order) => {
    console.log(\`Processed order \${order.id}\`);
  });
  processor.process(newOrder);</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Stripe's Async Workflows</h4>
              <p>Their payment processing uses:</p>
              <ul>
                <li>Priority queues for critical operations</li>
                <li>Circuit breakers for external APIs</li>
                <li>Event sourcing for audit trails</li>
                <li>99.99% successful payments</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 6 ========== -->
          <div class="blog-section">
            <h2 class="section-title">6. Performance Monitoring</h2>
            <p>Proactive monitoring catches issues before users notice.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Node.js Clinic.js</h3>
              <pre><code># Install globally
  npm install -g clinic
  
  # Run performance doctor
  clinic doctor -- node server.js
  
  # Generate flamegraph
  clinic flame -- node server.js</code></pre>
              
              <h3 class="tech-title">Key Metrics to Track</h3>
              <ul class="feature-list">
                <li>Event loop latency (&lt; 50ms)</li>
                <li>Memory usage (&lt; 70% heap)</li>
                <li>GC frequency</li>
                <li>HTTP request duration</li>
                <li>Error rates</li>
                <li>CPU usage</li>
                <li>Open handles</li>
              </ul>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">LinkedIn's Monitoring</h4>
              <p>Their Node.js observability stack:</p>
              <ul>
                <li>1-second granularity metrics</li>
                <li>Anomaly detection alerts</li>
                <li>Distributed tracing</li>
                <li>Reduced MTTR by 90%</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 7 ========== -->
          <div class="blog-section">
            <h2 class="section-title">7. Memory Management</h2>
            <p>Node.js memory leaks cause gradual performance degradation.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Heap Snapshot Analysis</h3>
              <pre><code>// Generate heap snapshot
  const heapdump = require('heapdump');
  
  // On memory pressure
  process.on('SIGUSR2', () => {
    const filename = \`heapdump-\${Date.now()}.heapsnapshot\`;
    heapdump.writeSnapshot(filename);
  });
  
  // Analyze in Chrome DevTools
  // 1. Load snapshot
  // 2. Compare snapshots
  // 3. Look for retained DOM</code></pre>
              
              <h3 class="tech-title">Common Leak Patterns</h3>
              <div class="code-comparison">
                <div>
                  <h4>Leaking</h4>
                  <pre><code>// Global variable accumulation
  const cache = {};
  
  function processRequest(req) {
    cache[req.id] = req.data;
    // Never cleared
  }</code></pre>
                </div>
                <div>
                  <h4>Fixed</h4>
                  <pre><code>// LRU cache with limits
  const LRU = require('lru-cache');
  const cache = new LRU({
    max: 100, // Items
    maxAge: 1000 * 60 // 1 minute
  });
  
  function processRequest(req) {
    cache.set(req.id, req.data);
  }</code></pre>
                </div>
              </div>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Walmart's Memory Optimization</h4>
              <p>After fixing memory leaks:</p>
              <ul>
                <li>Server restart frequency: 2 weeks → 6 months</li>
                <li>Memory usage reduced by 65%</li>
                <li>Throughput increased by 40%</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 8 ========== -->
          <div class="blog-section">
            <h2 class="section-title">8. HTTP/2 & Performance</h2>
            <p>HTTP/2 improves throughput with multiplexing and header compression.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Express with HTTP/2</h3>
              <pre><code>const spdy = require('spdy');
  const express = require('express');
  const fs = require('fs');
  
  const app = express();
  
  const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    protocols: ['h2', 'http/1.1']
  };
  
  // Push critical assets
  app.get('/', (req, res) => {
    const stream = res.push('/main.css', {
      request: { accept: 'text/css' },
      response: { 'content-type': 'text/css' }
    });
    stream.end(fs.readFileSync('main.css'));
    
    res.sendFile(__dirname + '/index.html');
  });
  
  spdy.createServer(options, app).listen(443);</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Google's Performance Gains</h4>
              <p>After HTTP/2 adoption:</p>
              <table class="comparison-table">
                <tr><th>Metric</th><th>Improvement</th></tr>
                <tr><td>Page load time</td><td>1.5s → 0.8s</td></tr>
                <tr><td>Bandwidth</td><td>60% reduction</td></tr>
                <tr><td>TCP connections</td><td>6 → 1 per client</td></tr>
              </table>
            </div>
          </div>
  
          <!-- ========== TOPIC 9 ========== -->
          <div class="blog-section">
            <h2 class="section-title">9. Real-Time Communication</h2>
            <p>WebSockets enable bidirectional low-latency communication.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Socket.IO Cluster</h3>
              <pre><code>const cluster = require('cluster');
  const { setupMaster, setupWorker } = require('@socket.io/sticky');
  const { createAdapter } = require('@socket.io/redis-adapter');
  const redis = require('redis');
  
  if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length;
    
    // Setup sticky sessions
    setupMaster();
    
    for (let i = 0; i < cpuCount; i++) {
      cluster.fork();
    }
  } else {
    const express = require('express');
    const app = express();
    const server = require('http').createServer(app);
    const io = require('socket.io')(server);
    
    // Redis adapter for cross-worker emits
    const pubClient = redis.createClient();
    const subClient = pubClient.duplicate();
    io.adapter(createAdapter(pubClient, subClient));
    
    // Connect to worker
    setupWorker(io);
    
    io.on('connection', (socket) => {
      socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
    });
    
    server.listen(3000);
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Slack's Real-Time Stack</h4>
              <p>Handling 10M+ concurrent connections:</p>
              <ul>
                <li>Edge-pushed WebSocket connections</li>
                <li>Graceful fallback to long polling</li>
                <li>Message batching</li>
                <li>99.99% uptime</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 10 ========== -->
          <div class="blog-section">
            <h2 class="section-title">10. Security Best Practices</h2>
            <p>Secure applications prevent costly breaches and maintain trust.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Essential Middleware</h3>
              <pre><code>const express = require('express');
  const helmet = require('helmet');
  const rateLimit = require('express-rate-limit');
  const mongoSanitize = require('express-mongo-sanitize');
  
  const app = express();
  
  // Security headers
  app.use(helmet());
  
  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP
  });
  app.use(limiter);
  
  // Data sanitization
  app.use(mongoSanitize());
  
  // CSRF protection
  const csrf = require('csurf');
  app.use(csrf({ cookie: true }));
  
  // Secure cookies
  app.use(require('cookie-session')({
    name: 'session',
    keys: [process.env.SECRET_KEY],
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  }));</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">OWASP Top 10 Prevention</h4>
              <p>Critical security measures:</p>
              <ul class="feature-list">
                <li>Injection protection</li>
                <li>Authentication hardening</li>
                <li>Sensitive data protection</li>
                <li>XXE prevention</li>
                <li>Access control</li>
                <li>Security misconfiguration</li>
                <li>XSS prevention</li>
                <li>Insecure deserialization</li>
                <li>Vulnerable components</li>
                <li>Insufficient logging</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 11 ========== -->
          <div class="blog-section">
            <h2 class="section-title">11. Containerization & Orchestration</h2>
            <p>Docker and Kubernetes enable scalable, portable deployments.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Optimized Dockerfile</h3>
              <pre><code># Stage 1: Build
  FROM node:16-alpine as builder
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build
  
  # Stage 2: Runtime
  FROM node:16-alpine
  WORKDIR /app
  
  # Install only production dependencies
  COPY package*.json ./
  RUN npm ci --only=production
  
  # Copy build artifacts
  COPY --from=builder /app/dist ./dist
  COPY --from=builder /app/public ./public
  
  # Run as non-root
  USER node
  EXPOSE 3000
  CMD ["node", "dist/server.js"]</code></pre>
              
              <h3 class="tech-title">Kubernetes Deployment</h3>
              <pre><code># deployment.yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: api-service
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: api
    template:
      metadata:
        labels:
          app: api
      spec:
        containers:
        - name: api
          image: my-registry/api:1.0.0
          ports:
          - containerPort: 3000
          resources:
            limits:
              cpu: "1"
              memory: "512Mi"
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Airbnb's Kubernetes Migration</h4>
              <p>Results after containerizing Node.js services:</p>
              <ul>
                <li>Deployment time: 60min → 2min</li>
                <li>Resource utilization: 35% → 80%</li>
                <li>Scaling events: Manual → Automatic</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 12 ========== -->
          <div class="blog-section">
            <h2 class="section-title">12. Serverless Node.js</h2>
            <p>Function-as-a-Service platforms offer auto-scaling with zero ops.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">AWS Lambda Optimization</h3>
              <pre><code>// Optimized Lambda handler
  const client = require('./db/client'); // Reused across invocations
  
  exports.handler = async (event) => {
    // Cold start optimization
    if (!client.isConnected) {
      await client.connect();
    }
    
    // Process event
    const data = await client.query('SELECT * FROM items');
    
    // Keep alive for subsequent calls
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Connection': 'keep-alive'
      }
    };
  };</code></pre>
              
              <h3 class="tech-title">Performance Benchmarks</h3>
              <table class="comparison-table">
                <tr><th>Strategy</th><th>Cold Start</th><th>Warm Start</th></tr>
                <tr><td>Default Config</td><td>1200ms</td><td>50ms</td></tr>
                <tr><td>ARM Architecture</td><td>800ms</td><td>35ms</td></tr>
                <tr><td>Minified Bundle</td><td>600ms</td><td>30ms</td></tr>
                <tr><td>Provisioned Concurrency</td><td>50ms</td><td>50ms</td></tr>
              </table>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">iRobot's Serverless Journey</h4>
              <p>Their cloud vacuum data pipeline:</p>
              <ul>
                <li>10,000+ concurrent executions</li>
                <li>$0 idle costs</li>
                <li>Automatic regional failover</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 13 ========== -->
          <div class="blog-section">
            <h2 class="section-title">13. GraphQL Performance</h2>
            <p>Optimized GraphQL implementations prevent over-fetching.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Apollo Server Optimizations</h3>
              <pre><code>const { ApolloServer } = require('apollo-server');
  const { createComplexityLimitRule } = require('graphql-validation-complexity');
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [
      createComplexityLimitRule(1000) // Prevent expensive queries
    ],
    context: ({ req }) => ({
      // DataLoader for batching
      userLoader: new DataLoader(keys => batchGetUsers(keys)),
      
      // Cache
      cache: new InMemoryLRUCache()
    }),
    persistedQueries: {
      // Automatic persisted queries
      cache: new RedisCache()
    }
  });</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">GitHub's GraphQL API</h4>
              <p>Performance optimizations:</p>
              <ul>
                <li>Query complexity analysis</li>
                <li>Persisted queries</li>
                <li>Edge caching</li>
                <li>95th percentile under 500ms</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 14 ========== -->
          <div class="blog-section">
            <h2 class="section-title">14. Advanced Load Testing</h2>
            <p>Realistic load testing identifies bottlenecks before production.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Artillery.io Script</h3>
              <pre><code># load-test.yml
  config:
    target: "https://api.example.com"
    phases:
      - duration: 60
        arrivalRate: 10
        name: Warm up
      - duration: 300
        arrivalRate: 50
        rampTo: 200
        name: Stress test
    payload:
      path: "users.csv"
      fields: ["id", "email"]
    
  scenarios:
    - name: "Authenticated requests"
      flow:
        - post:
            url: "/login"
            json:
              email: "{{ email }}"
              password: "test123"
            capture:
              json: "$.token"
              as: "authToken"
        - get:
            url: "/profile"
            headers:
              Authorization: "Bearer {{ authToken }}"</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Etsy's Capacity Planning</h4>
              <p>Their load testing regimen:</p>
              <ul>
                <li>Simulates Black Friday traffic year-round</li>
                <li>Identified database connection leaks</li>
                <li>Prevented $10M+ in potential lost sales</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== TOPIC 15 ========== -->
          <div class="blog-section">
            <h2 class="section-title">15. Edge Computing</h2>
            <p>Moving logic closer to users reduces latency and origin load.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Cloudflare Workers</h3>
              <pre><code>// Edge authentication middleware
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // JWT verification at edge
    const jwt = request.headers.get('Authorization');
    if (!jwt) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // Verify without origin roundtrip
    const isValid = await verifyJwt(jwt, PUBLIC_KEY);
    if (!isValid) {
      return new Response('Forbidden', { status: 403 });
    }
    
    // Pass to origin
    return fetch(request);
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Shopify's Edge Network</h4>
              <p>Results from moving logic to edge:</p>
              <table class="comparison-table">
                <tr><th>Metric</th><th>Improvement</th></tr>
                <tr><td>Checkout latency</td><td>800ms → 150ms</td></tr>
                <tr><td>Origin load</td><td>Reduced by 70%</td></tr>
                <tr><td>Global availability</td><td>50ms latency worldwide</td></tr>
              </table>
            </div>
          </div>
  
          <!-- Conclusion -->
          <div class="cta-box">
            <h3 class="cta-title">Build Blazing Fast Node.js Backends</h3>
            <p>Implement these techniques to create high-performance, scalable applications that handle millions of requests efficiently.</p>
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