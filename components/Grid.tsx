export default function Grid({ children }) {
  return (
    <div className="mx-auto grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
