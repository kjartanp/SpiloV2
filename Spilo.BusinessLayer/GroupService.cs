using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;

namespace Spilo.BusinessLayer
{
	public class GroupService : IGroupService
	{
		SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Spilo"].ToString());
		public List<GroupContract> RetrieveAllGroups()
		{
			var sql = @"select	Id as GroupId, 
		Name as GroupName, 
		RegisteredBy as Owner, 
		b.gameCount as GameCount, 
		b.LastPlayed as LastPlayedGame
   from Groups a 
   left outer join (
			select  GroupId,
					Sum(gamesPlayed) gameCount, 
					max(LastPlayedDate) LastPlayed 
			   from GameTypes
		   group by GroupId ) b on a.Id = b.GroupId";

			var groups = con.Query<GroupContract>(sql);
			return groups.ToList();
		}
	}

	public class GroupContract
	{
		public long GroupId { get; set; }
		public String GroupName { get; set; }
		public string Owner { get; set; }
		public DateTime LastPlayedGame { get; set; }
		public int GameCount { get; set; }
	}

	public interface IGroupService
	{
		List<GroupContract> RetrieveAllGroups();
	}
}
