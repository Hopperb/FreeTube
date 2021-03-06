/*
    This file is part of FreeTube.

    FreeTube is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    FreeTube is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with FreeTube.  If not, see <http://www.gnu.org/licenses/>.
*/



import {comment} from "./comment.model";

/**
 * Entire Comment Threads for a Video
 */
export class commentThread {
    videoId: ?string;
    nextPageToken: ?string;
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    };
    items: comment[];
}
