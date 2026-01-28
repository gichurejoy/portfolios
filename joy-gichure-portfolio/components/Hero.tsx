
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. Distributed System Health Monitor
const SystemHealth = () => {
  const [nodes, setNodes] = useState([
    { id: 'US_EAST_1A', status: 'HEALTHY', latency: 12, load: 0.34 },
    { id: 'EU_WEST_2B', status: 'DEGRADED', latency: 89, load: 0.78 },
    { id: 'AP_SOUTH_1C', status: 'HEALTHY', latency: 45, load: 0.52 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        latency: Math.max(10, node.latency + (Math.random() * 10 - 5)),
        load: Math.max(0.1, Math.min(0.99, node.load + (Math.random() * 0.1 - 0.05)))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] md:text-[9px] text-slate-500/60 leading-tight">
      {nodes.map(node => (
        <div key={node.id} className="mb-0.5">
          {`NODE_${node.id}    `}
          <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${node.status === 'HEALTHY' ? 'bg-emerald-500/60 animate-pulse' : 'bg-amber-500/60 animate-pulse'}`}></span>
          <span className={node.status === 'HEALTHY' ? 'text-emerald-500/60' : 'text-amber-500/60'}>
            {node.status === 'HEALTHY' ? '✓ HEALTHY' : '⚠ DEGRADED'}
          </span>
          {`   latency: ${Math.floor(node.latency)}ms    load: ${node.load.toFixed(2)}`}
        </div>
      ))}
      <div className="mt-2 text-[8px] opacity-70">
        [REPLICATION] eu-west → us-east: {(2.3 + Math.random() * 0.2).toFixed(1)}k ops/sec
      </div>
      <span className="typing-cursor ml-1 opacity-50"></span>
    </div>
  );
};

// 2. API Request/Response Trace
const ApiTrace = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] md:text-[9px] text-blue-400/40 leading-tight text-right">
      <div>TRACE_ID: 8f3a9e2d</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 0 ? 1 : 0.3 }}>┌─ POST /api/orders/create               189ms</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 1 ? 1 : 0.3 }}>│  ├─ auth.validateToken()                12ms</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 2 ? 1 : 0.3 }}>│  ├─ db.transaction()                   145ms</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 3 ? 1 : 0.3 }}>│  │  ├─ INSERT INTO orders              23ms</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 4 ? 1 : 0.3 }}>│  │  └─ NOTIFY queue.orders             4ms</div>
      <div className="transition-opacity duration-300" style={{ opacity: step >= 5 ? 1 : 0.3 }}>└─ → 201 CREATED {`{order_id: "ORD_8374"}`}</div>
      <span className="typing-cursor ml-1 opacity-50"></span>
    </div>
  );
};

// 3. K8s Pods
const K8sPods = () => {
  const [replicas, setReplicas] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplicas(prev => prev === 5 ? 3 : prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] md:text-[9px] text-purple-400/40 leading-tight">
      <div className="mb-1">pod/api-service-7f9d8b   0/2 → 2/2 Running   [READY]</div>
      <div className="flex items-center gap-1 mb-1">
        Status:
        <div className="h-1 bg-purple-500/20 w-16 rounded overflow-hidden">
          <div className="h-full bg-purple-500/60 transition-all duration-1000 ease-out" style={{ width: `${(replicas / 5) * 100}%` }}></div>
        </div>
      </div>
      <div>[HPA] Scaling deployment/api-service: {replicas} → {replicas < 5 ? replicas + 1 : 5} replicas</div>
      <div className="text-[8px] opacity-70 ml-4">reason: CPU utilization {70 + replicas * 2}% &gt; 70%</div>
      <span className="typing-cursor ml-1 opacity-50"></span>
    </div>
  );
};

// 4. Redis Monitor
const RedisMonitor = () => {
  const [logIndex, setLogIndex] = useState(0);
  const logs = [
    { cmd: 'GET user:session:8f3a9e2d', res: '(string) "eyJhbGciOiJIUzI1NiIs..." [HIT] 0.8ms' },
    { cmd: 'ZADD leaderboard 9847 "player_1337"', res: '(integer) 1 [OK] 1.2ms' },
    { cmd: 'PUBLISH notifications {"type":"msg"}', res: '(integer) 47 subscribers 2.1ms' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % logs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] md:text-[9px] text-rose-500/40 leading-tight">
      <div className="mb-2">
        <div>&gt; {logs[logIndex].cmd}</div>
        <div className="pl-2 opacity-70">← {logs[logIndex].res}</div>
      </div>
      <div className="mb-2 opacity-50">
        <div>&gt; {logs[(logIndex + 1) % logs.length].cmd}</div>
        <div className="pl-2 opacity-70">...</div>
      </div>
      <div className="border-t border-rose-500/10 pt-1 mt-1">
        [MEMORY] 847MB/2GB | [KEYS] {(127942 + logIndex * 12).toLocaleString()}
      </div>
      <span className="typing-cursor ml-1 opacity-50"></span>
    </div>
  );
};

// 5. CI/CD Pipeline
const CicdPipeline = () => {
  const [step, setStep] = useState(0);
  const steps = [
    "Checkout code",
    "Install dependencies",
    "Run tests (247 passed)",
    "Build production bundle"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % (steps.length + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[8px] md:text-[9px] text-slate-500/60 leading-tight text-right">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center justify-end gap-2 mb-0.5">
          <span className={step > i ? "opacity-100" : "opacity-30"}>{s}</span>
          {step > i ? (
            <span className="text-emerald-500/60">✓</span>
          ) : step === i ? (
            <span className="w-2 h-2 border-2 border-amber-500/60 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-slate-400/20"></span>
          )}
        </div>
      ))}
      <div className={`mt-1 text-amber-500/60 transition-opacity duration-300 ${step === steps.length ? 'opacity-100' : 'opacity-0'}`}>
        ⚙ Deploying to staging...
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">

          {/* 1. Distributed System Health Monitor (Top Left) */}
          <div className="absolute top-[10%] left-[5%]">
            <SystemHealth />
          </div>

          {/* 5. API Request/Response Trace (Top Right) */}
          <div className="absolute top-[15%] right-[5%]">
            <ApiTrace />
          </div>

          {/* 4. Kubernetes Pod Orchestration (Middle Right - Lower) */}
          <div className="absolute top-[55%] right-[8%] hidden md:block">
            <K8sPods />
          </div>

          {/* 10. Redis Cache Operations (Bottom Left) */}
          <div className="absolute bottom-[20%] left-[8%]">
            <RedisMonitor />
          </div>

          {/* 8. CI/CD Pipeline Status (Bottom Right) */}
          <div className="absolute bottom-[25%] right-[10%]">
            <CicdPipeline />
          </div>
        </div>
      </div>

      <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4 relative">
        <div className="relative sm:py-20 lg:py-28 pt-8 pb-16">

          <div className="hidden md:flex absolute left-0 top-16 items-center gap-3 text-xs text-slate-600">
            <span className="font-bold uppercase">Based in Nairobi</span>
            <span className="h-px w-24 bg-slate-300"></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="aspect-square w-full max-w-[580px] rounded-full mx-auto p-6 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-bold mb-3">Full-Stack Engineer • Portfolio Specialist</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold font-playfair text-slate-900 leading-tight">
                    Professional Portfolio <br /> Websites That Get <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">You Hired</span>
                  </h1>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium max-w-md mx-auto">
                    Transform your career with high-converting portfolios and custom software solutions tailored for developers and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="m16 10-4 4-4-4" /></svg>
              Get Your Portfolio
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors bg-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
              View My Work
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">15+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Portfolios Built</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">3+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Years Production</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">7-Day</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Turnaround</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">KE</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Based in Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
