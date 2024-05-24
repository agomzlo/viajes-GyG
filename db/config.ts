import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text()
  },
});

const PostCard = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    cityId: column.number({ references: () => Cities.columns.id }),
    monumentId: column.number({optional: true, references: () => Monuments.columns.id}),
    message: column.text(),
    from: column.number({ references: () => User.columns.id }),
    to: column.number({ references: () => User.columns.id }),
    date: column.date(),
    image: column.text(),
    stampImage: column.text({}),
  }
});

const Countries = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    image: column.text(),
  },
});

const Cities = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    image: column.text(),
    completed: column.boolean({default: false}),
    countryId: column.number({ references: () => Countries.columns.id }),
  },
});

const Monuments = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    cityId: column.number({ references: () => Cities.columns.id }),
    name: column.text(),
    type: column.text(),
    image: column.text(),
    optional: column.boolean(),
    visited: column.boolean({default: false}),
    visitedAt: column.date({optional: true}),
    stamped: column.boolean({default: false}),
  },
});
  

// https://astro.build/db/config
export default defineDb({
  tables: { User, PostCard, Cities, Monuments, Countries },
})
