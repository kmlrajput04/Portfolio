// blog3.js - DevOps Best Practices for Modern Teams
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButton = document.getElementById("blog3");
  
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
          .workflow-diagram {
            width: 100%;
            max-width: 800px;
            margin: 2rem auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            background: white;
          }
          
          .tool-comparison {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
          }
        `;
  
        // Add content to container
        container.innerHTML = `
          <button class="close-btn" id="close-overlay">×</button>
  
          <header class="blog-header">
            <h1 class="blog-title">DevOps Best Practices for Modern Teams</h1>
            <div class="title-underline"></div>
            <p class="blog-subtitle">Comprehensive guide to building efficient CI/CD pipelines and infrastructure</p>
          </header>
  
          <!-- ========== PRACTICE 1 ========== -->
          <div class="blog-section">
            <h2 class="section-title">1. Infrastructure as Code (IaC)</h2>
            <p>Manage and provision infrastructure through machine-readable definition files rather than manual processes.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Terraform Implementation</h3>
              <pre><code># AWS EKS Cluster Configuration
  resource "aws_eks_cluster" "main" {
    name     = "production-cluster"
    role_arn = aws_iam_role.eks.arn
    version  = "1.24"
  
    vpc_config {
      subnet_ids = [
        aws_subnet.private_1a.id,
        aws_subnet.private_1b.id
      ]
    }
  
    tags = {
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
  
  # Kubernetes Namespaces
  resource "kubernetes_namespace" "monitoring" {
    metadata {
      name = "monitoring"
      labels = {
        purpose = "observability"
      }
    }
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Airbnb's IaC Journey</h4>
              <p>By adopting Terraform across their infrastructure:</p>
              <ul>
                <li>Reduced provisioning time from 3 days to 15 minutes</li>
                <li>Eliminated 90% of configuration drift issues</li>
                <li>Enabled self-service environments for 200+ engineering teams</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 2 ========== -->
          <div class="blog-section">
            <h2 class="section-title">2. CI/CD Pipeline Automation</h2>
            <p>Implement robust continuous integration and delivery workflows to accelerate software releases.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">GitHub Actions Workflow</h3>
              <pre><code>name: Production Deployment
  
  on:
    push:
      branches: [ main ]
    pull_request:
      branches: [ main ]
  
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test
    
    build:
      needs: test
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: production-build
          path: dist/
    
    deploy:
      needs: build
      runs-on: ubuntu-latest
      environment: production
      steps:
      - uses: actions/download-artifact@v3
        with:
          name: production-build
      - uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync ./dist s3://\${{ vars.PRODUCTION_BUCKET }} --delete</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Netflix's Deployment Pipeline</h4>
              <p>Their Spinnaker-based pipeline handles:</p>
              <ul>
                <li>10,000+ deployments per day</li>
                <li>Canary releases across 3 regions</li>
                <li>Automated rollback on metrics degradation</li>
                <li>99.99% deployment success rate</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 3 ========== -->
          <div class="blog-section">
            <h2 class="section-title">3. Containerization & Orchestration</h2>
            <p>Package applications with dependencies and manage them at scale using Kubernetes.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Docker + Kubernetes Setup</h3>
              <pre><code># Dockerfile
  FROM node:18-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  EXPOSE 3000
  USER node
  CMD ["node", "server.js"]
  
  # Kubernetes Deployment
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
          image: registry.example.com/api:v1.2.3
          ports:
          - containerPort: 3000
          resources:
            requests:
              cpu: "100m"
              memory: "128Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Spotify's Kubernetes Migration</h4>
              <p>After moving from bare metal to Kubernetes:</p>
              <ul>
                <li>40% reduction in infrastructure costs</li>
                <li>5x faster deployment frequency</li>
                <li>99.9% availability during peak traffic</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 4 ========== -->
          <div class="blog-section">
            <h2 class="section-title">4. Monitoring & Observability</h2>
            <p>Implement comprehensive logging, metrics, and tracing for system visibility.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Prometheus + Grafana Stack</h3>
              <pre><code># prometheus.yml
  global:
    scrape_interval: 15s
    evaluation_interval: 15s
  
  rule_files:
    - 'alert.rules'
  
  scrape_configs:
    - job_name: 'node'
      static_configs:
        - targets: ['node-exporter:9100']
    - job_name: 'api'
      metrics_path: '/metrics'
      static_configs:
        - targets: ['api-service:3000']
  
  # Alert rule example
  groups:
  - name: api-alerts
    rules:
    - alert: HighErrorRate
      expr: rate(http_requests_total{status=~"5.."}[1m]) > 0.1
      for: 5m
      labels:
        severity: 'critical'
      annotations:
        summary: "High error rate on {{ $labels.instance }}"
        description: "5xx error rate is {{ $value }}"</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Uber's Observability Stack</h4>
              <p>Their M3-based monitoring system:</p>
              <ul>
                <li>Processes 50+ million metrics per second</li>
                <li>Stores 100+ petabytes of time series data</li>
                <li>Reduces MTTR by 75% through AI-powered anomaly detection</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 5 ========== -->
          <div class="blog-section">
            <h2 class="section-title">5. GitOps Methodology</h2>
            <p>Manage infrastructure and deployments through Git repositories as the single source of truth.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">ArgoCD Implementation</h3>
              <pre><code># Application CRD
  apiVersion: argoproj.io/v1alpha1
  kind: Application
  metadata:
    name: production-api
    namespace: argocd
  spec:
    destination:
      server: https://kubernetes.default.svc
      namespace: production
    source:
      repoURL: git@github.com:company/infrastructure.git
      path: kubernetes/production/api
      targetRevision: HEAD
    syncPolicy:
      automated:
        prune: true
        selfHeal: true
      syncOptions:
      - CreateNamespace=true
    project: default
  
  # Kustomize overlay
  apiVersion: kustomize.config.k8s.io/v1beta1
  kind: Kustomization
  resources:
  - ../../base/api
  patchesStrategicMerge:
  - production-patches.yaml
  images:
  - name: api-service
    newTag: v1.5.0</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Weaveworks Implementation</h4>
              <p>Pioneers of GitOps achieved:</p>
              <ul>
                <li>99.9% deployment accuracy</li>
                <li>Full audit trail of all changes</li>
                <li>Self-service environments for developers</li>
                <li>5x faster incident recovery</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 6 ========== -->
          <div class="blog-section">
            <h2 class="section-title">6. Security as Code</h2>
            <p>Integrate security practices into the DevOps workflow from the beginning.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Shift-Left Security Pipeline</h3>
              <pre><code># Trivy Security Scan in CI
  - name: Scan for vulnerabilities
    uses: aquasecurity/trivy-action@master
    with:
      image-ref: \${{ steps.build.outputs.image }}
      format: 'table'
      exit-code: '1'
      ignore-unfixed: true
      severity: 'CRITICAL,HIGH'
      vuln-type: 'os,library'
  
  # OPA Policy Example
  package kubernetes.validating
  
  deny[msg] {
    input.request.kind.kind == "Pod"
    not input.request.object.spec.securityContext.runAsNonRoot
    msg := "Pods must run as non-root users"
  }
  
  deny[msg] {
    input.request.kind.kind == "Pod"
    input.request.object.spec.containers[_].securityContext.privileged
    msg := "Privileged containers are not allowed"
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Bank of America's DevSecOps</h4>
              <p>Their security automation resulted in:</p>
              <ul>
                <li>90% reduction in critical vulnerabilities</li>
                <li>Security reviews completed in hours vs. weeks</li>
                <li>Automated compliance reporting for audits</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 7 ========== -->
          <div class="blog-section">
            <h2 class="section-title">7. Feature Flag Management</h2>
            <p>Decouple deployment from release using feature flags for gradual rollouts.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">LaunchDarkly Integration</h3>
              <pre><code>// React Feature Flag Component
  import { useFlags } from 'launchdarkly-react-client-sdk';
  
  function CheckoutPage() {
    const { newPaymentUi } = useFlags();
    
    return (
      &lt;&gt;
        {newPaymentUi ? (
          &lt;NewPaymentFlow /&gt;
        ) : (
          &lt;LegacyPaymentFlow /&gt;
        )}
      &lt;/&gt;
    );
  }
  
  // Server-side validation
  const ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);
  
  app.get('/api/features', async (req, res) => {
    const user = {
      key: req.user.id,
      custom: {
        plan: req.user.plan,
        signupDate: req.user.createdAt
      }
    };
    
    const flags = await ldClient.allFlagsState(user);
    res.json(flags.toJSON());
  });</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Google's Feature Rollout Strategy</h4>
              <p>Their systematic approach includes:</p>
              <ul>
                <li>1% → 10% → 50% → 100% user rollouts</li>
                <li>Automated metrics analysis at each stage</li>
                <li>Instant rollback capability</li>
                <li>Country/region-based targeting</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 8 ========== -->
          <div class="blog-section">
            <h2 class="section-title">8. Database DevOps</h2>
            <p>Apply DevOps principles to database schema changes and migrations.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Liquibase Migration</h3>
              <pre><code># changelog.yml
  databaseChangeLog:
    - changeSet:
        id: 1
        author: devteam
        changes:
          - createTable:
              tableName: users
              columns:
                - column:
                    name: id
                    type: uuid
                    constraints:
                      primaryKey: true
                - column:
                    name: email
                    type: varchar(255)
                    constraints:
                      nullable: false
                      unique: true
    
    - changeSet:
        id: 2
        author: devteam
        changes:
          - addColumn:
              tableName: users
              columns:
                - column:
                    name: last_login
                    type: timestamp
                    defaultValueComputed: CURRENT_TIMESTAMP
  
  # Flyway Command
  flyway migrate \
    -url=jdbc:postgresql://localhost:5432/appdb \
    -user=admin \
    -password=\$DB_PASSWORD \
    -locations=filesystem:/migrations \
    -baselineOnMigrate=true</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Etsy's Zero-Downtime Migrations</h4>
              <p>Their database practices enable:</p>
              <ul>
                <li>50+ schema changes per day</li>
                <li>No scheduled maintenance windows</li>
                <li>Automated rollback procedures</li>
                <li>Cross-database compatibility</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 9 ========== -->
          <div class="blog-section">
            <h2 class="section-title">9. Chaos Engineering</h2>
            <p>Proactively test system resilience by injecting failures in controlled environments.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Gremlin Experiments</h3>
              <pre><code># CPU Attack
  gremlin attack cpu run \
    --cpu-cores 2 \
    --cpu-load 0.9 \
    --length 300
  
  # Network Latency
  gremlin attack network run \
    --device eth0 \
    --latency 500 \
    --length 180 \
    --tags service=checkout
  
  # Kubernetes Pod Kill
  gremlin attack k8s pod kill \
    --namespace production \
    --label-selector app=payment-service \
    --percent 50 \
    --length 60</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Netflix's Chaos Monkey</h4>
              <p>Their chaos engineering program:</p>
              <ul>
                <li>Randomly terminates production instances daily</li>
                <li>Identified 100+ failure scenarios before customers were impacted</li>
                <li>Improved system resilience by 300%</li>
                <li>Reduced outage duration by 75%</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 10 ========== -->
          <div class="blog-section">
            <h2 class="section-title">10. Value Stream Management</h2>
            <p>Measure and optimize the end-to-end software delivery lifecycle.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">DORA Metrics Dashboard</h3>
              <pre><code># Sample Metrics Collection
  const metrics = {
    deploymentFrequency: await getDeploymentsLastMonth() / 30,
    leadTimeForChanges: await calculateAverageLeadTime(),
    changeFailureRate: await getFailedDeploymentsRatio(),
    timeToRestore: await getMeanTimeToRecovery()
  };
  
  # Key Metrics to Track:
  - Deployment Frequency
  - Lead Time for Changes
  - Change Failure Rate
  - Mean Time to Recovery (MTTR)
  - Feature Utilization Rate
  - Cycle Time
  - Flow Efficiency</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Accenture's DevOps Transformation</h4>
              <p>After implementing VSM:</p>
              <ul>
                <li>Identified 40% waste in delivery pipeline</li>
                <li>Reduced cycle time from 6 weeks to 3 days</li>
                <li>Increased developer productivity by 35%</li>
                <li>Achieved 99% compliance with SLAs</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 11 ========== -->
          <div class="blog-section">
            <h2 class="section-title">11. Cloud Cost Optimization</h2>
            <p>Monitor and right-size cloud resources to balance performance and cost.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Kubernetes Vertical Pod Autoscaler</h3>
              <pre><code># VPA Configuration
  apiVersion: autoscaling.k8s.io/v1
  kind: VerticalPodAutoscaler
  metadata:
    name: api-vpa
  spec:
    targetRef:
      apiVersion: "apps/v1"
      kind: Deployment
      name: api-service
    updatePolicy:
      updateMode: "Auto"
    resourcePolicy:
      containerPolicies:
      - containerName: "*"
        minAllowed:
          cpu: "100m"
          memory: "128Mi"
        maxAllowed:
          cpu: "2"
          memory: "4Gi"
        controlledResources: ["cpu", "memory"]
  
  # AWS Spot Fleet Strategy
  {
    "SpotPrice": "0.05",
    "TargetCapacity": 10,
    "AllocationStrategy": "capacity-optimized",
    "LaunchSpecifications": [
      {
        "InstanceType": "m5.large",
        "WeightedCapacity": 1
      },
      {
        "InstanceType": "m4.large",
        "WeightedCapacity": 1  
      }
    ]
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Spotify's Cloud Savings</h4>
              <p>Through optimization efforts:</p>
              <ul>
                <li>Reduced cloud costs by 40% ($20M/year)</li>
                <li>Automated scaling based on demand patterns</li>
                <li>Implemented spot instances for 80% of workloads</li>
                <li>Maintained 99.95% availability</li>
              </ul>
            </div>
          </div>
  
          <!-- ========== PRACTICE 12 ========== -->
          <div class="blog-section">
            <h2 class="section-title">12. Internal Developer Platforms</h2>
            <p>Build self-service platforms to empower development teams.</p>
            
            <div class="tech-demo">
              <h3 class="tech-title">Backstage Integration</h3>
              <pre><code># backstage.yaml
  apiVersion: backstage.io/v1alpha1
  kind: Component
  metadata:
    name: payment-service
    description: Process payment transactions
    tags:
      - payments
      - nodejs
      - postgres
  spec:
    type: service
    lifecycle: production
    owner: payments-team
    system: ecommerce-platform
    providesApis:
      - payment-api
    consumesApis:
      - user-api
      - inventory-api
  
  # Terraform Template
  resource "backstage_template" "node_service" {
    name = "node-service"
    title = "Node.js Microservice"
    description = "Scaffold a new Node.js service"
    
    parameters {
      name = "serviceName"
      description = "Name of the new service"
      required = true
    }
  
    steps = [
      {
        id = "scaffold"
        action = "fetch:template"
        input = {
          url = "https://github.com/company/node-template"
          values = {
            serviceName = "\${{ parameters.serviceName }}"
          }
        }
      }
    ]
  }</code></pre>
            </div>
            
            <div class="case-study">
              <h4 class="case-title">Twitter's Developer Platform</h4>
              <p>Their internal platform provides:</p>
              <ul>
                <li>One-click environment provisioning</li>
                <li>Standardized tooling across 1000+ engineers</li>
                <li>Automated compliance checks</li>
                <li>Reduced onboarding time from 2 weeks to 1 day</li>
              </ul>
            </div>
          </div>
  
          <!-- Conclusion -->
          <div class="cta-box">
            <h3 class="cta-title">Ready to Transform Your DevOps Practice?</h3>
            <p>Implement these proven strategies to accelerate delivery while improving reliability and security.</p>
           
          </div>
  
          <div style="text-align: center;">
            <button class="close-bottom" id="close-overlay-bottom">
              Close Article
            </button>
          </div>
        `;
  
        // Append elements to DOM
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