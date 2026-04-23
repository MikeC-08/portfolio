import ProjectCard from "@/components/ProjectCard";
import clientPromise from "@/lib/mongodb";
// Add this before any other imports/requires
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Using Google DNS

async function getProjects() {
  const client = await clientPromise;
// 1. 指定 Database 名稱為 "Career"
  const db = client.db("Career"); 
  
  // 2. 指定 Collection 名稱為 "Projects" (注意首字母大寫)
  // 3. 使用 .find({}).toArray() 抓取所有資料
  const data = await db.collection("Projects").find({}).toArray();
  console.log(data)
  
// 4. 格式化資料，將 MongoDB 的 _id (ObjectId) 轉為字串
  return data.map(item => ({
    ...item,
    _id: item._id.toString(),
  })) as any[];
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto py-24 px-8 bg-white min-h-screen">
      
      <section className="text-center mb-20">
        {/* 把 text-gray-900 改成你的深藍色，例如 text-blue-900 或自定義深藍 */}
        <h1 className="text-6xl font-black text-blue-900">
          Mike Chan<span className="text-blue-600">.</span>
        </h1>
        <p className="text-xl text-slate-500 mt-4 font-medium">
          CS Graduate | Python Developer | AI Enthusiast 
        </p>
        
      </section>
{/* 2. 關於我區塊 (About Section) - 新增部分 */}
      <section className="mb-28 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
            About Me
          </h2>
        </div>
        <div className="md:col-span-2 text-lg text-slate-600 leading-relaxed space-y-4">
          <p>
            Hello! I am Chan Man Kit <iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&size=large&text=false" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe><br></br> A Computer Science graduate with a solid foundation in programming.
          </p>
          <p> I am passionate about using
            <span className="text-slate-900 font-semibold"> Python </span> 
            to solve automation problems and have gained experience in machine learning and image recognition through practical application.
          </p>
          <p>
            Although my core skills lie in backend and automation, I am currently actively exploring the
            <span className="text-blue-600 font-semibold"> React / Next.js </span> 
            ecosystem, aiming to become a full-stack developer capable of connecting AI models with modern front-end interfaces.
          </p>
          
          {/* 技能標籤 */}
          <div className="pt-4 flex flex-wrap gap-3">
            {["Python", "Solidity", "Node.js", "GUI", "Automation"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md font-medium">
                {skill}
              </span>
            ))}
          </div>
          
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <ProjectCard key={item.title} project={item} />
        ))}
      </div>
      
    </main>
  );
}
