import { ArticleHeaderProps } from '.';
import { data } from '../../api/dados.json';

//fizemos um mock no json -> desvantagem que o componente depende desses dados, quando houver um problema na APi vai dar bO tbm.
//foi feito só para ganhar tempo

const { title, excerpt, cover, author, categories, createdAt } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as ArticleHeaderProps;
