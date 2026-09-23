export default function Card({ title }) {
  return (
    <div className="bg-gray-100 border border-green-500 h-40 flex items-center justify-center font-bold rounded">
      {title}
    </div>
  );
}
