import { Calendar, MapPin, Clock } from 'lucide-react'

interface Show {
  id: string
  date: string
  venue: string
  city: string
  state: string
  country: string
  time: string
  ticketUrl?: string
  soldOut?: boolean
}

const upcomingShows: Show[] = [
  {
    id: '1',
    date: '2024-10-15',
    venue: 'Teatro de la Ciudad',
    city: 'Ciudad de México',
    state: 'CDMX',
    country: 'México',
    time: '8:00 PM',
    ticketUrl: '#'
  },
  {
    id: '2',
    date: '2024-10-28',
    venue: 'Auditorio Telmex',
    city: 'Guadalajara',
    state: 'Jalisco',
    country: 'México',
    time: '7:30 PM',
    ticketUrl: '#'
  },
  {
    id: '3',
    date: '2024-11-12',
    venue: 'Majestic Theater',
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    time: '8:00 PM',
    ticketUrl: '#'
  },
  {
    id: '4',
    date: '2024-11-25',
    venue: 'Arena Monterrey',
    city: 'Monterrey',
    state: 'Nuevo León',
    country: 'México',
    time: '9:00 PM',
    soldOut: true
  }
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return {
    month: date.toLocaleDateString('es-MX', { month: 'short' }).toUpperCase(),
    day: date.getDate(),
    weekday: date.toLocaleDateString('es-MX', { weekday: 'long' }).toUpperCase()
  }
}

export default function UpcomingShows() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(220,60%,20%)] mb-4">
            UPCOMING SHOWS
          </h2>
          <div className="w-24 h-1 bg-[hsl(42,88%,75%)] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the magic of Mexican music live. Join us for unforgettable evenings celebrating our beautiful culture.
          </p>
        </div>

        <div className="space-y-6">
          {upcomingShows.map((show) => {
            const { month, day, weekday } = formatDate(show.date)

            return (
              <div key={show.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">

                  {/* Date Section */}
                  <div className="bg-[hsl(220,60%,20%)] text-[hsl(42,88%,75%)] p-6 text-center md:w-32 flex-shrink-0">
                    <div className="text-sm font-semibold">{month}</div>
                    <div className="text-3xl font-bold">{day}</div>
                    <div className="text-xs opacity-80">{weekday}</div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-[hsl(220,60%,20%)] mb-2">
                          {show.venue}
                        </h3>

                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-[hsl(15,75%,55%)]" />
                            <span>{show.city}, {show.state}, {show.country}</span>
                          </div>

                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-[hsl(15,75%,55%)]" />
                            <span>{show.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Ticket Button */}
                      <div className="flex-shrink-0">
                        {show.soldOut ? (
                          <div className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold">
                            SOLD OUT
                          </div>
                        ) : (
                          <button className="bg-[hsl(42,88%,75%)] text-[hsl(220,60%,20%)] px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(42,88%,80%)] transition-colors">
                            GET TICKETS
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to be the first to know about new tour dates?
          </p>
          <button className="border-2 border-[hsl(220,60%,20%)] text-[hsl(220,60%,20%)] px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(220,60%,20%)] hover:text-white transition-colors">
            JOIN MAILING LIST
          </button>
        </div>
      </div>
    </section>
  )
}